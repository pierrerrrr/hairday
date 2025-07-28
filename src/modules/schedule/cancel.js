const periods = document.querySelectorAll('.period');

periods.forEach((period) => {
    period.addEventListener("click", (event) => {
        if (event.target.classList.contains("cancel-icon")) {

            const item = event.target.closest("li");
            const { id } = item.dataset;

            if (id) {
                const isConfirm = confirm("Você tem certeza que deseja cancelar este agendamento?");

                if (isConfirm) {
                    console.log(`Cancelando agendamento com ID: ${id}`);
                }
            }
        }
    })
})