import './header.css'
import circle_solid from './info-circle-solid.svg'
import Toggle from '../TOGGLE/Toggle'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, NavLink, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { ImCart } from "react-icons/im";
import { RxTextAlignJustify } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { ThemeContext } from '../Api/Contex'
import { useContext } from 'react';
import { useSelector } from 'react-redux';
const Header = () => {
  const cart = useSelector((state) => state.Commerce.cart)
  const { theme, theSetter, changeTheme } = useContext(ThemeContext)
  const [state, setState] = useState(false)
  const [side, setSide] = useState(false)
  const [item, setItem] = useState([])
  const [render, setRender] = useState(true)
  let navigate = useNavigate()

  const dropDown = (
    <div className='dropdown'>
      {item?.map((i) => (
        <NavLink style={({ isActive }) => isActive ? link : link1} className='dropdown1' key={[i]} to={`/categories/${i}`} > <p key={[i]}>{i}</p></NavLink>
      ))}
    </div>
  )

  async function getItem() {
    const res = await axios.get(`https://fakestoreapi.com/products/categories`)
    setItem(res.data)
  }

  useEffect(() => {
    getItem()
  }, [render])

  const link = {
    textDecoration: 'none',
    color: '#ffe6a7',
  }

  const link1 = {
    textDecoration: 'none',
    color: 'inherit',
  }
  const quantity = () => {
    let QTY = 0;
    cart.map((i) => QTY += i.QTY)
    return QTY
  }
  const Nav = (
    <div className='side_bar'>
      <div className='side_bar_wrap'>
        <NavLink style={({ isActive }) => isActive ? link : link1} to={'/'}>
          <p>HOME</p>
        </NavLink>
        <div
          onMouseEnter={() => { setState(!state) }}
          onMouseLeave={() => { setState(!state) }}
        >
          <NavLink  style={({ isActive }) => isActive ? link : link1} to='/categories'>
            <p>CATEGORIES</p>
          </NavLink>
          {state && <div className='invisible'></div>}
          {state && dropDown}
        </div>
        <NavLink style={({ isActive }) => isActive ? link : link1} className='cartIcon' to={'/cart'}>
          <p >CART<sup>{quantity()}</sup></p>
          < ImCart className='cartImage' />
        </NavLink>
      </div>

    </div>
  )



  return (
    <div className="head">
      <div className="head_wrap">
        <img onClick={() => navigate("/")} src={circle_solid} />
        <nav>
          <NavLink style={({ isActive }) => isActive ? link : link1} to={'/'}>
            <p>HOME</p>
          </NavLink>
          <div
            onMouseEnter={() => { setState(!state) }}
            onMouseLeave={() => { setState(!state) }}
          >
            <NavLink  style={({ isActive }) => isActive ? link : link1} to='/categories'>
              <p>CATEGORIES</p>
            </NavLink>
            {state && <div className='invisible'></div>}
            {state && dropDown}
          </div>
          <NavLink style={({ isActive }) => isActive ? link : link1} className='cartIcon' to={'/cart'}>
            <p >CART </p>
            < ImCart /><sup>{quantity()}</sup>
          </NavLink>
        </nav>
        <Toggle />
        <div className='Toggle'>
          {side ? <RxCross2 fontSize={30} onClick={() => { setSide(!side) }} /> : <RxTextAlignJustify fontSize={30} onClick={() => { setSide(!side) }} />}
        </div>
        {side&&Nav}
      </div>
    </div >
  )
}

export default Header