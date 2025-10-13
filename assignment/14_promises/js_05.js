const url ="https://jsonplaceholder.typicode.com/posts";

const xhr = new XMLHttpRequest();
console.log(xhr.readyState);
console.log(xhr);
xhr.open(GET , url);