function calculateDifference() {
    // Получаем введенные даты
    const startDate = document.getElementById("startDate").value;
    const endDate = document.getElementById("endDate").value;

    // Проверяем, что обе даты введены
    if (!startDate || !endDate) {
        alert("Пожалуйста, выберите обе даты.");
        return;
    }

    // Преобразуем строки в объекты Date
    const start = new Date(startDate);
    const end = new Date(endDate);

    // Проверяем, что дата окончания позже даты начала
    if (end < start) {
        alert("Дата окончания не может быть раньше даты начала.");
        return;
    }

    // Расчитываем разницу в миллисекундах
    const timeDifference = end - start;

    // Переводим миллисекунды в дни
    const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));

    // Отображаем результат
    document.getElementById("daysLeft").textContent = daysDifference;
}
