const form = document.querySelector("form");
const resposta = document.getElementById("salarioNormal");
const salarioTotal = document.getElementById("salarioFinal");

form.addEventListener("submit", function(evento){
    const salario = parseInt(form.inSalario.value);
    const horaExtra = parseInt(form.inHoraExtra.value);

    const valorHora = salario / 220;
    const valorHoraExtra = valorHora * 0.5;
    const valorHoraExtraFinal = valorHoraExtra + valorHora;
    const saldoSalarioExtra = valorHoraExtraFinal * horaExtra;

    const salarioComHora = saldoSalarioExtra + salario

    resposta.innerText = `Salario: ${salario}`;
    salarioTotal.innerText = `Salario com horas extras: ${salarioComHora.toFixed(2)}`;

    evento.preventDefault();
})