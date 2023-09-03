const menu = document.querySelector('.menubar a'); // value get using class name and tage name
const menulist = document.querySelector('nav ul'); // value get using tag name
menu.addEventListener('click', ()=>{
    menulist.classList.toggle('showmenu');
});
// const toggleButton = document.querySelector(".toggle-button");
// const navList = document.querySelector("ul");

// toggleButton.addEventListener("click", () => {
//     navList.classList.toggle("active");    
// });

/*const navToggle = document.getElementById("navToggle");
const navigation = document.querySelector(".naveatage");

navToggle.addEventListener("click", () => {
    navigation.classList.toggle("show");
});*/
