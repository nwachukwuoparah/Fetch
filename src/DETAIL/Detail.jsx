import './detail.css'
import { useState, useEffect, useContext } from 'react'
import circle from './info-circle-solid.svg'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'
import Loading from '../Loading'
import Gif from '../Gif.gif'
import { ThemeContext } from '../Api/Contex'
import { useDispatch } from 'react-redux'
import { addToCart } from '../Store/Features/Features'
import Swal from 'sweetalert2'
const Detail = ({ theme }) => {
  const dispach = useDispatch()

  const { theSetter } = useContext(ThemeContext)

  const [loading, setLoading] = useState(true)
  const [item, setItem] = useState([])
  const { id } = useParams()

  async function getitems() {
    const res = await axios.get(`https://fakestoreapi.com/products/${id}`)
    setItem(res.data)
    setLoading(!loading)
    // console.log(res.data)
  }

  useEffect(() => {
    getitems()
  }, [])
  return (
    <div className='Detail'>
      {loading ? <img src={Gif} alt="loading..." /> : <div style={theSetter} className='Detail_wrap' to={`./detail${id}`}>
        <img src={item.image} />
        <div className='Detail_text'>
          <h3>food</h3>
          <p>{item.description}</p>
          <p>{item.title}</p>
          <p>{item.price}</p>

          <button className='button'
            onClick={() => {
              dispach(addToCart(item));
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500,
              });
            }}
          >Add to Cart</button>

        </div>
      </div >}
    </div >
  )
}
export default Detail

