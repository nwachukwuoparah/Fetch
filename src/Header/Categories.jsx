import './header.css'
import { useContext } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Gif from '../Gif.gif'
import {ThemeContext} from '../Api/Contex'
const Categories = ({ theme }) => {
  const {theSetter} =useContext(ThemeContext)
  const [loading, setLoading] = useState(true)
  const [cati, setCati] = useState()
  const { categories } = useParams()
  async function getCategories() {
    const res = await axios.get(`https://fakestoreapi.com/products/category/${categories}`)
    // console.log(res.data)
    setCati(res.data)
    setLoading(!loading)
  }

  useEffect(() => {
    getCategories()
    // console.log(categories)
  }, [categories])

  return (
    <div className='categories'>
      {loading ? <img src={Gif} alt="loading..." /> : <div className='categories_wrap' >
        {cati?.map((item) => (
          <Link style={theSetter} key={item.id} className='categories_Card' to={`/detail/${item.id}`}>
            <img src={item.image} />
            <div className='categories_card_text'>
              <h4>{item.category}</h4>
              <p>{item.title} </p>
            </div>
          </Link>
        ))}
      </div>}
    </div >
  )
}

export default Categories