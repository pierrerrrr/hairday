import dayjs from "dayjs";
import { scheduleHours } from "../../utils/schedule-hours.js";
import { hoursClick } from "./hours-click.js";


const hours = document.getElementById("hours")

export function hoursLoad({ date }) {
    const opening = scheduleHours.map((hour) => {
        // recupera somente a hora do dia
        const [scheduleHour] = hour.split(":");

        // validação para ver se a hora está no passado
        const isHourPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs())

        return {
            hour,
            available: isHourPast,
        }
    })

    // renderizando os horários disponíveis
    opening.forEach(({ hour, available }) => {
        const li = document.createElement("li");
        li.classList.add("hour");
        li.classList.add(available ? "hour-available" : "hour-unavailable");
        
        li.textContent = hour;

        if(hour === "09:00") {
            hourHeaderAdd("Manhã");
        } else if (hour === "13:00") {
            hourHeaderAdd("Tarde");
        } else if (hour === "18:00") {
            hourHeaderAdd("Noite");
        }
        hours.append(li);
    })

    hoursClick();
}

function hourHeaderAdd(title) {
    const header = document.createElement("li");
    header.classList.add("hour-period")
    header.textContent = title;

    hours.append(header);
}

// pensar em como resolver a questão do dia não resetar