export function hoursClick(){
    const hours = document.querySelectorAll('.hour-available');
    

    hours.forEach((available) =>{
        available.addEventListener("click",(selected)=>{

            //reseta todos os botoes
            hours.forEach((hour) =>{
                hour.classList.remove("hour-selected")
                hour.style.transform = "scale(1)";
            })

            selected.target.classList.add("hour-selected")


            //animação botao clicando
            selected.target.style.transform = "scale(0.9)";
            setTimeout(() => {
                selected.target.style.transform = "scale(1)";
            }, 50);
        })
    })
}