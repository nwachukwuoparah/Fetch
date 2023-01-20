import './cart.css'
import Loading from '../Loading'
import { ImCart } from "react-icons/im";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { removeItem } from '../Store/Features/Features'
import { clearAll } from '../Store/Features/Features'
import { addToCart } from '../Store/Features/Features'
import { Check } from '../Store/Features/Features'
const Cart = ({ theme }) => {
  const dispach = useDispatch()
  const cart = useSelector((state) => state.Commerce.cart)
  // console.log(cart)
  let Total = 0;
  cart.map((i) => Total += i.total)
  return (
    <div className='cart'>
      <div className='cart_wrap'>
        <h1>Total:${Total}</h1>
        {cart.map((item) => <div key={item.id} className='cart_item'>
          <img src={item.image} />
          <h5>{item.title}</h5>
          <p>${item.price}</p>
          <h1
            onClick={() => dispach(addToCart(item))}
          >+</h1>

          {item.QTY}

          <h1
            onClick={() => { dispach(Check(item)) }}
          >-</h1>

          <button
            onClick={() => dispach(removeItem(item))}
          >Delete</button>

        </div>)}
        <button
          onClick={() => dispach(clearAll())}
        >Clear All</button>

      </div>

    </div>
  )
}

export default Cart 