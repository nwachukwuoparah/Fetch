import './home.css'
import { useState, useEffect,useContext } from 'react'
import circle from './info-circle-solid.svg'
import axios from 'axios'
import {Link } from 'react-router-dom'
// import Slider from 'react-slick'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Gif from '../Gif.gif'
import {ThemeContext} from '../Api/Contex'
import { useDispatch } from 'react-redux'
import { Products} from '../Store/Features/Features'

const Home = () => {
  const {theSetter} =useContext(ThemeContext)
  const [item, setItem] = useState([])
  const [loading,setLoading] =useState(true)
   const dispach = useDispatch()

  async function getItem() {
    try {
      const response = await axios.get('https://fakestoreapi.com/products')
      setItem(response.data)
      dispach(Products(response.data))
      setLoading(!loading)
    } catch (e) {
      console.log(e)
    }
  }
  
  useEffect(() => {
    getItem()
  }, [])

  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 6000,
    autoplaySpeed: 2000,
  };

  return (
    <div className='Home' >
      {/* <Slider className='Slider' {...settings}>
        {item?.map((item) => (
          <div key={item.id} className='slider_wrap'>
            <img className='image' key={item.id} src={item.image} />
          </div>))}
      </Slider> */}
      {loading ? <img src={Gif} alt="loading..." /> : <div className='Home_wrap'>
        {item?.map((item) => (
          <Link style={theSetter}  key={item.id} className='Card' to={`/detail/${item.id}`}>
            <img src={item.image} />
            <div className='card_text'>
              <h4>{item.category}</h4>
              <p>{item.title} </p>
            </div>
          </Link>))}
      </div>}
    </div >
  )
}

export default Home