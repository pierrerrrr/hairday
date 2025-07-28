import dayjs from "dayjs";
import { scheduleHours } from "../../utils/schedule-hours.js";
import { hoursClick } from "./hours-click.js";


const hours = document.getElementById("hours")

export function hoursLoad({ date, dailySchedules }) {
    // Limpa os horários anteriores antes de renderizar novos
    hours.innerHTML = "";

    // recupera a lista de todos os horários ocupados
    const unavaiableHours = dailySchedules.map((schedule) => dayjs(schedule.when).format("HH:mm"));

    const selectedDate = dayjs(date);
    const now = dayjs();
    const isToday = selectedDate.isSame(now, 'day');

    const opening = scheduleHours.map((hour) => {
        // recupera somente a hora do dia
        const [scheduleHour] = hour.split(":");

        let available = true;

        // Verifica se o horário está ocupado
        if (unavaiableHours.includes(hour)) {
            available = false;
        }
        // Se for hoje, verifica se o horário já passou
        else if (isToday) {
            const scheduleDateTime = selectedDate.hour(scheduleHour).minute(0);
            available = scheduleDateTime.isAfter(now);
        }
        // Se for uma data futura, todos os horários livres estão disponíveis

        return {
            hour,
            available
        }
    })

    // renderizando os horários disponíveis
    opening.forEach(({ hour, available }) => {
        const li = document.createElement("li");
        li.classList.add("hour");
        li.classList.add(available ? "hour-available" : "hour-unavailable");

        li.textContent = hour;

        if (hour === "09:00") {
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