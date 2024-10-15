const form = document.forms[0];
const input = document.querySelector("[type='text']");
const invalidSpan = document.getElementById("invalid");
let main = document.querySelector("main");
let success = document.querySelector(".success");
let dismiss = document.querySelector(".dismiss")
console.log(input);
form.addEventListener("submit",function (e)  {
    e.preventDefault();
    if(input!= "") {
        let regex = /.+@+[a-z]+\.[a-z]{2,}/ig;
        if(regex.test(input.value)) {
            main.classList.add("none");
            success.classList.remove("none");
            input.value = "";
        }else {
            invalidSpan.classList.remove("none");
            input.style.color = "hsl(4, 100%, 67%)";
            input.style.borderColor = "hsl(4, 100%, 67%)";
            input.style.background = "rgba(255, 98, 87, 0.14)";
        }
    }
})

input.addEventListener("keyup",function () {
    if(this.value == ""){
        invalidSpan.classList.add("none");
        this.style.background = "#fff";
        this.style.borderColor = "hsl(231, 7%, 60%";
        this.style.color = "black";
    }
})

dismiss.onclick = function () {
    main.classList.remove("none");
    success.classList.add("none");
}