function output(event){
    console.log(event.target.parentNode.parentNode.parentNode.querySelector(".cht__el").textContent);
}


document.querySelectorAll(".card-button").forEach((el) => { el.addEventListener('click', output);});