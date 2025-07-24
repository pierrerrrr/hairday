import { hoursLoad } from "../form/hours-load.js";

const selectedDate = document.getElementById("date")
export function schedulesDay() {
    // obtem somente o valor do selectedDate
    const date = selectedDate.value
    // renderiza as horas disponíveis
    hoursLoad({ date });
}