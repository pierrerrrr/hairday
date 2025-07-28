import { hoursLoad } from "../form/hours-load.js";
import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js";

const selectedDate = document.getElementById("date")
export async function schedulesDay() {
    // obtem somente o valor do selectedDate
    const date = selectedDate.value
    // renderiza as horas disponíveis

    const dailySchedules = await scheduleFetchByDay({ date });
    console.log(dailySchedules);

    hoursLoad({ date });
}