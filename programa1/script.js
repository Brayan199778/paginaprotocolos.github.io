function updateDateTime() {
    const now = new Date();

    // Hora
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // la hora '0' debe ser '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;

    const timeString = `${hours}:${minutes}`;
    document.getElementById('time').textContent = timeString;
    document.getElementById('time-sub-text').textContent = ampm;

    // Fecha
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString('es-ES', options);
    document.getElementById('day-text').textContent = dateString;
}

// Actualiza la hora y fecha cada minuto
updateDateTime();
setInterval(updateDateTime, 60000);
