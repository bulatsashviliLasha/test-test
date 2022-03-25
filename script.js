const hamburger = document.getElementById('hamburger');
const navUL = document.getElementById('nav-ul');

function hideH3() {
    const x = document.getElementById("rogoria");
    return x.style.display === "none" ? x.style.display = "flex" : x.style.display = "none"
}

hamburger.addEventListener('click', () => {
    navUL.classList.toggle('show');
    hideH3()
})