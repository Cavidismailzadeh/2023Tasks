
"use strict"





let headers = document.querySelectorAll(".tab-menu .header .item");

let contents = document.querySelectorAll(".tab-menu .content .item");


headers.forEach(element => {
    element.addEventListener("click", function () {

        document.querySelector(".active").classList.remove("active");
        this.classList.add("active");

        contents.forEach(content => {
            if (content.getAttribute("data-id") == this.getAttribute("data-id")) {
                content.classList.remove("d-none")
            } else {
                content.classList.add("d-none")
            }
        });
    });
});