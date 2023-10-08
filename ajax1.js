let ftn = document.getElementById('ftn');
ftn.addEventListener('click',buttonclickhandler);
function buttonclickhandler(){
    console.log("hello world");
    const xhr = new XMLHttpRequest;
    xhr.open("GET",'https://dummyjson.com/products',true);
    xhr.onload=function(){
       let a = this.response;
    app.innerHTML=a
    }
    xhr.send();
}