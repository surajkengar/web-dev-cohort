import Product1 from "./component/products.jsx";
import Provider from "./Contexts/cartProvider.jsx";
import Header from "./component/Header.jsx";



function App() {
  

  return (
    <>
     
      <Provider>
         <Header/>
        <Product1/>
        
      </Provider>
      
    </>
  )
}

export default App;
