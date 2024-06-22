document.querySelectorAll(".card__button").forEach(
    function (but) {
        but.addEventListener("click", 
            (element) => {
                console.log(element.target.parentNode.querySelector(".card__header_text").textContent);
            }
        );
    }
)