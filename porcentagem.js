window.alert("calculadora de porcentagem")
var num_total = window.prompt("digite o número total: ")
var percent = window.prompt("digite a porcentagem: ")
var percent_value = window.prompt ("digite o valor porcento: ")
const percent_total = 100

window.alert (num_total, percent, percent_value)
if (num_total == null) {
    var resultado = (percent_value * percent_total) / percent
    window.alert (resultado)    
}