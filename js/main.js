const header = document.querySelector("header");

window.addEventListener("scroll", () =>{
    header.classList.toggle ("sobremi", window.scrollY > 100);
})