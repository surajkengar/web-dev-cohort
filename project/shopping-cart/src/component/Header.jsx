import {useEffect, useState} from "react";
import Model from "./ui_model/Model";
import Cart from "./Cart";
import styles from "./Header.module.css"
import Container from "./ui_model/Container";
import { BsCartFill } from "react-icons/bs";
import {useCart} from "../Contexts/cartProvider"; 


function Header(){
    const {cart} =useCart();
    const totalQuantity = cart.reduce((acc , item)=>{
        return acc + item.quantity;
    },0);
    const [isModelOpen , setIsModelOpen]=useState(false);
    function closeModel(){
        setIsModelOpen(false)
    }
    function handleClick(){
        setIsModelOpen(true)
    }
    useEffect(()=>{
        if(isModelOpen){
            document.documentElement.style.overflow ="hidden";
        }else{
            document.documentElement.style.overflow ="auto";
        }
    } , [isModelOpen])

    return(
        <header className={styles.header}>
            <Container>
                <nav className={styles.nav} >
                <h1>Arc Shop</h1>
                <button className={styles.showCartButton} onClick={handleClick}>
                    <span className={styles.cartIconAndNumber}>
                        <BsCartFill />
                    {
                        totalQuantity > 0 &&<span className={styles.Number}>{totalQuantity}</span>
                    }
                    
                    
                    </span>
                    <span>cart</span>

                </button>
            </nav>
            </Container>
            
           {isModelOpen && (
            <Model closeModel={closeModel}>
               <Cart/>
            </Model>
           )} 
        </header>
    )
}

export default Header;