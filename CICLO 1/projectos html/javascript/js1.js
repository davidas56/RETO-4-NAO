function calculateIncome() {
    var hourlyRate = parseFloat(document.getElementById("hourlyRate").value);
    var hoursWorked = parseFloat(document.getElementById("hoursWorked").value);

    if (isNaN(hourlyRate) || isNaN(hoursWorked)) {
        document.getElementById("incomeResult").innerText = "Por favor, ingresa valores numéricos válidos.";
    } else {
        var totalIncome = hourlyRate * hoursWorked;
        document.getElementById("incomeResult").innerText = "Ingresos totales: $" + totalIncome.toFixed(2);
    }
}