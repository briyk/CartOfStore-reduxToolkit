import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { calculateTotals , getCartItems } from './features/cart/cartSlice';
import Modal from "./components/Modal";
import { openModal } from "./features/modal/modalSlice";

const App = () =>{
  const { isOpen } = useSelector((state) => state.modal);
  const {items , isLoading} = useSelector( state => state.cart)
  const dispatch = useDispatch();
  // console.log(items.total)
  useEffect( () => {
    dispatch(calculateTotals())
  },[{items}] ) ;

  useEffect( () =>{
    dispatch(getCartItems())
  } ,[] )

  if (isLoading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <main>
         {isOpen && <Modal />}
        <Navbar/>
        <CartContainer/>
    </main>
  );
}

export default App;
