import dayjs from 'dayjs';
import { apiConfig, scheduleNew } from '../../services/schedule-new.js';
import { schedulesDay } from "../schedule/load.js"

const form = document.querySelector('form');
const selectedDate = document.getElementById("date")
const clientName = document.getElementById('client');

const setActualDate = dayjs(new Date()).format("YYYY-MM-DD");

// carrega a data atual e n deixa escolher uma data menor que a atual
selectedDate.value = setActualDate;
selectedDate.min = setActualDate;

form.onsubmit = async (event) => {
    event.preventDefault();

    try {
        const name = clientName.value.trim();
        if (!name) {
            return alert("Por favor, preencha o nome do cliente.");
        }

        const hourSelected = document.querySelector(".hour-selected");
        if (!hourSelected) {
            return alert("Por favor, selecione um horário.");
        }

        // aqui recupera somente a hora
        const [hour] = hourSelected.innerText.split(":");

        // insere a data e hora no formato ISO
        const when = dayjs(selectedDate.value).hour(hour).minute(0).format();

        const id = new Date().getTime();

        await scheduleNew({
            id,
            name,
            when,
        })

        // recarrega os horários disponíveis
        await schedulesDay();

        // limpa o campo do nome
        clientName.value = "";

    } catch (error) {
        alert("Erro ao enviar o formulário. Tente novamente mais tarde.");
        console.log(error)
    }
}