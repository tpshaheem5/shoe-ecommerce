import React from 'react'
import { useContext } from 'react'
import { myContext } from './Context'


function Cart() {
    const {cart,setCart}=useContext(myContext)
    let cartTotal =0;

    const removeItem = (e)=>{
        const removeItemid = parseInt(e.target.id) 
        const newItems = cart.filter((item)=> item.id !==removeItemid)
        setCart(newItems)
    }

    const addQty = (id)=>{
        const newqty = cart.map(
            (item)=>item.id==id ?{...item, qty: item.qty+1} :item
        ) 
        setCart(newqty); 
    }

    const removeQty = (id)=>{

        const newqty = cart.map(
          (item)=>  item.id == id && item.qty >1 ? {...item, qty: item.qty-1  } :  item
        
        )
      
        setCart(newqty);
    }
  return (
    <div>

    </div>
  )
}


export default Cart