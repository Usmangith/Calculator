let btns = document.querySelectorAll(".btn");

let input = document.querySelector("input");

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        if(btn.textContent === "="){
            try{
            input.value = eval(input.value);
            }catch(error){
                input.value = "error";
            }
        }else if(btn.textContent === "AC"){
            input.value = "";
        }else{
            input.value = input.value + btn.textContent;
        }
    });
});