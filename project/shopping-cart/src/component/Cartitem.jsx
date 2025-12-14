import { useCart } from "../Contexts/cartProvider";
import styles from "./cartitem.module.css";
import {AiOutlinePlus,AiOutlineMinus} from "react-icons/ai";
import { ImCross } from "react-icons/im";

function Cartitem({id,price,img,title,quantity}){
    const{cart,dispatch}=useCart();
    function handleIncrese(){
        dispatch({type:"increseQuantity" , payload:{id}})
    }
    function handleDecrese(){
        dispatch({type:"decreseQuantity" , payload:{id}})
    }
    function handleRemove(){
        dispatch({type:"Remove" , payload:{id}})
    }
    return (
        <div className={styles.cartItem}>
            <div className={styles.imageAndtitle}>
                <div className={styles.imageContainer}>
                    <img src={img} alt={title} className={styles.cartImage} />
                </div>
                <h3>{title}</h3>
            </div>
            <div className={styles.otherControls}>
                <div className={styles.qtyInput}>
                    <button onClick={handleIncrese}>
                        <AiOutlinePlus/>
                    </button>
                    <span className={styles.quantityDisplay}>{quantity}</span>
                    <button onClick={handleDecrese}>
                        <AiOutlineMinus/>
                    </button>
                </div>
                <p>&#8377; {price * quantity}</p>
                <button onClick={handleRemove} className={styles.removeItemBtn}>
                    <ImCross/>
                </button>
            </div>

            



           
        </div>
    )
}

export default Cartitem;