
import styles from "./product.module.css";
import { useCart } from "../Contexts/cartProvider";

function Product3({id,img,title,price}){
    const{cart,dispatch}=useCart();
    function handleClick(){
        for(let item of cart){
            if(item.id === id){
                alert("item already added to cart");
                return;
            }
        }
        const NewItem={
            id:id,
            title:title,
            price:price,
            img:img,
            quantity:1
        }
        dispatch({type:"AddNewCart", payload:NewItem})
        alert("item added successfully");
    }
    return(
        <div className={styles.product}>
           
            <img src={img} alt={title} className={styles.productImage} />
            <p className={styles.title}>{title}</p>
            <p className={styles.price}>&#8377;{price}</p>
            
            <br />
            <button onClick={handleClick} className={styles.addToCartBtn}>Add to Cart</button>
        </div>
    )
}

export default Product3;