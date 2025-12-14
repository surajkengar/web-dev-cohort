
import Products from "../Data/product";
import styles from "./products.module.css";
import Product3 from "./product";
import Container from "./ui_model/Container";

function Product1(){

    
    return (
        <Container>
            <h1>Best Of Arc</h1>
            <div className={styles.Products}>
                {
                Products.map((product2)=>{
                    return <Product3 key={product2.id} {...product2} />
                })
            }
            </div>
            
        </Container>
    )
}

export default Product1;