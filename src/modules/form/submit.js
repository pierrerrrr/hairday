import dayjs from 'dayjs';

const form = document.querySelector('form');
const selectedDate = document.getElementById("date")

const setActualDate = dayjs(new Date()).format("YYYY-MM-DD");

// carrega a data atual e n deixa escolher uma data menor que a atual
selectedDate.value = setActualDate;
selectedDate.min = setActualDate;

form.onsubmit = (event) => {
    event.preventDefault();
}