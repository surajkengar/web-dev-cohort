import {useCart} from "../Contexts/cartProvider";
import Cartitem from "./Cartitem";
import styles from "./cart.module.css";
function Cart(){
    const {cart}= useCart();
    const totalAmount = cart.reduce((totalAmount , item)=>{
        return totalAmount +item.price * item.quantity;
    },0);
    if(cart.length === 0){
        return <h3>NO Item Found!!!</h3>
    }
    return (
        <div className={styles.cart}>  
            <h2 className={styles.cartHeading}>Shopping Cart</h2>
            <div>
                {
                cart.map((item)=>{
                    return <Cartitem key={item.id} {...item}/>
                })
                }
            </div>
            <h1>totalAmount :&#8377; {totalAmount}</h1>
        </div>
      
    )
}

export default Cart;