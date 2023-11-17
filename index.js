let ans=document.getElementById("input");
let btn=document.getElementById("button");
let todo=document.getElementById("abc");

btn.addEventListener("click",function(){
    let paragraph=document.createElement("p");
    paragraph.innerHTML=ans.value;
    todo.appendChild(paragraph);
    ans.value="";
    paragraph.addEventListener("click",function(){
        paragraph.style.textDecoration="line-through";
    })
    paragraph.addEventListener("dblclick",function(){
        todo.removeChild(paragraph);
    })
})