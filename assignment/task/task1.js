

// const product_info = [
//     {pro_id : 1 , pro_name : "ios" , pro_price : 100},
//     {pro_id : 2 , pro_name : "andro" , pro_price : 10000},
//     {pro_id : 3 , pro_name : "linux" , pro_price : 5000},
//     {pro_id : 4 , pro_name : "ios" , pro_price : 2000},
//     {pro_id : 5 , pro_name : "andro" , pro_price : 8000},
//     {pro_id : 6 , pro_name : "linux" , pro_price : 7000}
    
// ]
// const price=product_info.reduce(function(total , prod){
//     let prodname = prod.pro_name;
//     let prodprice = prod.pro_price;
//     total[prodname] = total[prodname] + prodprice
   
//      return total;
// },{ios:0,andro:0,linux:0})

// console.log(price);


// let total = {
//     ios : 0
// }

// total["ios"] = 100;
// console.log(total["ios"])

// total["ios"] = total["ios"] + 2000;

// console.log(total)

// {
//     linux : ,
//     andro : ,
//     ios : 
// }









// let total=0;
// for(let pri of price){
    
//     total+=pri.pro_price;
// }
// console.log(total);


// const movie =[
//     {heroname :"salman"  ,director :"suraj"  ,moviename:"kantar"   ,year:2023 },
//     {heroname : "saharukh"  ,director :"sagar"  ,moviename:"sairat"  ,year:2019 , },
//     {heroname : "ranveer" ,director : "santosh" ,moviename: "saiyara"  ,year:2024 , },
//     {heroname : "akshay" ,director : "yuga" ,moviename: "bahubali"  ,year: 2019, },
//     {heroname :"boby"  ,director : "patil"  ,moviename: "xyz"  ,year:2024 , },
//     {heroname : "ritesh" ,director : "dhiran" ,moviename:"tubelight"   ,year: 2023, },
//     {heroname : "raghav" ,director : "rohit"  ,moviename: "animal"  ,year:2018 }

// ]


// //filter out array of 2024
// //

// const movie_2024 = movie.filter(function(name,index){
//         return name.year == 2024;
// }).map(function(element){
//     return element.moviename;
// })

// console.log(movie_2024);

// const movie_count = movie.reduce(function(element , curr_value){
//         let year = curr_value.year;
//         console.log(year);
//         return element;
        
// })
// console.log(movie_count);

// const movie = [
//   { heroname: "salman", director: "suraj", moviename: "kantar", year: 2023,collection:2000 },
//   { heroname: "saharukh", director: "sagar", moviename: "sairat", year: 2019 , collection:10000 },
//   { heroname: "ranveer", director: "santosh", moviename: "saiyara", year: 2024 ,collection:8000 },
//   { heroname: "akshay", director: "yuga", moviename: "bahubali", year: 2019 ,collection:9000 },
//   { heroname: "boby", director: "patil", moviename: "xyz", year: 2024 ,collection:3000},
//   { heroname: "ritesh", director: "dhiran", moviename: "tubelight", year: 2023,collection:7000 },
//   { heroname: "raghav", director: "rohit", moviename: "animal", year: 2018 ,collection:11000 }
// ];

// const yearCount = {};

// movie.forEach((m) => {
//   if (yearCount[m.year]) {

//     yearCount[m.year]+=m.collection; // if year already exists, increase count
//   } else {
//     yearCount[m.year] = m.collection;
//      // if year not found, set count = 1
//   }
// });

// console.log(yearCount);

// const arr =new Map();

// movie.map(function(element){
//     if(arr.has(element.year)){
        
//        arr.set(element.year,arr.get(element.year)+element.collection);
//     }
//     else{
//         arr.set(element.year ,element.collection);
//     }
// })

// console.log(arr);

const arr =[1,2,3,1,1,4,10,3,2,10,1,4,2,3,10];

const map1 =new map();




