const searchBarBlock = document.querySelector(".search-bar-block");

const searchIcon = document.querySelector(".search-icon");

searchIcon.addEventListener("click", () => {
    searchBarBlock.classList.toggle("active");
});