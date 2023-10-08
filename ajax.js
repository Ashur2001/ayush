console.log("helllo world");
let ftn = document.getElementById('ftn');
ftn.addEventListener('click',buttonclickhandler);
function buttonclickhandler(){
    console.log("work properly");
    const xhr= new XMLHttpRequest;
 //   xhr.open('GET','https://dummyjson.com/products',true);
    xhr.open('PUT','panwar.txt',true);
    xhr.onprogress=function(){
        console.log("on progress");
    }
    xhr.onload=function(){
        if(this.status===200){
        console.log(this.responseText);}
        else 
        console.log("no no no");
    }
    par= 'hello world'
    xhr.send(par);
}