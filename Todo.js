let inp = document.querySelector("input");
let ul = document.querySelector("ul");
let btn = document.querySelector("button");

btn.addEventListener("click", function(){
    let item = document.createElement("li");
    item.innerText = inp.value;
    let delbtn = document.createElement("button");
    delbtn.innerText = "Delete";
    delbtn.classList.add("Delete");
    item.appendChild(delbtn);
    ul.appendChild(item);
    inp.value = "";
});

let delbtns = document.querySelectorAll(".del");
for(delbtn of delbtns){
    delbtn.addEventListener("click", function(){
        let per = this.parentElement;
        console.log(per);
        per.remove();
    });
}