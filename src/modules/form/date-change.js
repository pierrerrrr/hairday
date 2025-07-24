import { schedulesDay } from "../schedule/load.js"

const selectedDate = document.getElementById("date");
const hours = document.getElementById("hours");

selectedDate.onchange = () => {
    // limpa a lista de horários
    hours.innerHTML = "";
    schedulesDay();
}