import {useContext, useEffect, useReducer } from 'react'
import './App.css'
import Header from './Header/Headr'
import Home from './HOME/Home'
import Detail from './DETAIL/Detail'
import Categories from './Header/Categories'
import Cart from './CART/Cart'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {ThemeContext} from './Api/Contex'

function App() {
  const {theme,theSetter1} =useContext(ThemeContext)
  return (
    <div style={theSetter1} className="App">
        <Router>
          <Header/>
          <Routes>
            <Route path={'/'} element={<Home/>} />
            <Route path={'/detail/:id'} element={<Detail />} />
            <Route path={'/categories/:categories'} element={<Categories />} />
            <Route path={'/cart'} element={<Cart />} />
          </Routes>
        </Router>
    </div>
  )
}

export default App
