let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let searchBtn = document.querySelector(".bx-search");

/*
btn.onclick = function() {
    sidebar.classList.toggle("active");
}
*/

btn.addEventListener("click", ()=>{
    sidebar.classList.toggle("active");
});

searchBtn.addEventListener("click", ()=>{
    sidebar.classList.toggle("active");
});