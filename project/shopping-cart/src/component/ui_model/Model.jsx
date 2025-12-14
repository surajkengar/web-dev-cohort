import {createPortal} from "react-dom";
import styles from "./model.module.css";
function Model({children , closeModel}){


    return createPortal(<>
        <div className={styles.modelBackdrop} onClick={closeModel}></div>
        <div className={styles.modelContent}>
            <h1>cart</h1>
            {children}</div>
    </> , document.getElementById("model"));
}

export default Model;