export function hoursClick() {
    const hours = document.querySelectorAll(".hour-available");

    hours.forEach((available) => {
        available.addEventListener("click", (selected) => {
            // garante que somente uma hora pode ser selecionada
            hours.forEach((hour) => {
                hour.classList.remove("hour-selected");
            })

            // adiciona a classe de selecionado
            selected.target.classList.add("hour-selected");
        })
    })
}