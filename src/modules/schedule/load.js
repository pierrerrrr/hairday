import { hoursLoad } from "../form/hours-load.js";
import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js";
import { schedulesShow } from "./show.js";

const selectedDate = document.getElementById("date")
export async function schedulesDay() {
    // obtem somente o valor do selectedDate
    const date = selectedDate.value
    const dailySchedules = await scheduleFetchByDay({ date });
    schedulesShow({ dailySchedules });

    // renderiza as horas disponíveis
    hoursLoad({ date, dailySchedules });
}