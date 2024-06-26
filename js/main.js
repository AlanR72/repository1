const view1 = document.getElementById("view1");
console.log(view1);

const view2 = document.querySelector("#view2");
console.log(view2);


const views = document.getElementsByClassName("view");
console.log(views);

const sameViews = document.querySelectorAll(".view");
console.log(sameViews);

const divs = view1.querySelectorAll("div");
console.log(divs);

const sameDivs = view1.getElementsByTagName("div");
console.log(sameDivs);

const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");
console.log(evenDivs);

//Loop required for styling even divs
for (let i = 0; i < evenDivs.length; i++){
    evenDivs[i].style.backgroundColor = "#f1f1f1";
    /*evenDivs[i].style.width = "300px";
    evenDivs[i].style.height = "300px";*/

}

