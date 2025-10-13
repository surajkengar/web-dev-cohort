
const url ='https://fakestoreapi.com/productss/1';

fetch(url)
.then((response) => {
    if(response.ok){
        return response.json();
    }
    else{
        throw new Error("error occured");
    }
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
})



