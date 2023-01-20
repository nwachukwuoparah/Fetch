import '../Header/header.css'
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import {ThemeContext} from '../Api/Contex'
import { useContext } from 'react';
const Toggle = () => {
  const {theme,changeTheme} =useContext(ThemeContext)
  const toggle_wrap = {
    width: 50,
    height: 20,
    backgroundColor: 'grey',
    borderRadius: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'start',
    padding: 2
  }
  const toggle_wrap1 = {
    width: 50,
    height: 20,
    backgroundColor: 'grey',
    borderRadius: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'end',
    padding: 2
  }
  return (
    <div  className={!theme?'toggle_wrap toggle':'toggle_wrap1 toggle'} >
      {!theme ? <MdLightMode onClick={() => changeTheme()} fontSize={20} /> :
        <MdDarkMode onClick={() => changeTheme()} fontSize={20} style={{color:'white'}} />}
    </div>
  )
}

export default Toggle