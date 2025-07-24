import dayjs from 'dayjs';

const form = document.querySelector('form');
const selectedDate = document.getElementById("date")
const clientName = document.getElementById('client');

const setActualDate = dayjs(new Date()).format("YYYY-MM-DD");

// carrega a data atual e n deixa escolher uma data menor que a atual
selectedDate.value = setActualDate;
selectedDate.min = setActualDate;

form.onsubmit = (event) => {
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

        // insere a data e hora
        const when = dayjs(selectedDate.value).add(hour, "hour");

        const id = new Date().getTime();

        console.log({
            id,
            name,
            when,
        })

    } catch (error) {
        alert("Erro ao enviar o formulário. Tente novamente mais tarde.");
        console.log(error)
    }
}