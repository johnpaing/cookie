const cBox = document.querySelector(".box-container");
const buttons = document.querySelectorAll(".button");
const wClose = document.querySelector(".close");

const executeCodes= () =>{
    if(document.cookie.includes("johnpaing")) return;
    cBox.classList.add("show");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
             cBox.classList.remove("show");

             if(button.id === "acceptBtn"){
                document.cookie = "cookieBy=johnpaing;max-age=" + 60 * 60 * 24 * 30;
             }
        })
    })
       wClose.addEventListener("click", () => {
              cBox.classList.remove("show");
       });
};

window.addEventListener("load", executeCodes);



