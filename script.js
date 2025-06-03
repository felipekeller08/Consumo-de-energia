function calcular(){
    let wattscomput = document.getElementById("computador").value
    let tempocomput = document.getElementById("tempo1").value
    let quantidade1 = document.getElementById("quantidade1").value
    let resultado1 = ((wattscomput * quantidade1) * tempocomput) / 1000
    let valor1 = resultado1 * 0.72
    document.getElementById("result1").textContent = "o gasto do computador foi de " + resultado1 + " kWh = R$ " + valor1.toFixed(2) 
    
    let wattsimpre = document.getElementById("impressora").value
    let tempoimpre = document.getElementById("tempo2").value
    let quantidade2 = document.getElementById("quantidade2").value
    let resultado2 = ((wattsimpre * quantidade2) * tempoimpre) / 1000
    let valor2 = resultado2 * 0.72
    document.getElementById("result2").textContent = "o gasto da impressora foi de " + resultado2 + " kWh = R$ " + valor2.toFixed(2) 
    
    let wattslamp = document.getElementById("lampadas").value
    let tempolamp = document.getElementById("tempo3").value
    let quantidade3 = document.getElementById("quantidade3").value
    let resultado3 = ((wattslamp * quantidade3) * tempolamp) / 1000
    let valor3 = resultado3 * 0.72
    document.getElementById("result3").textContent = "o gasto das lâmpadas foi de " + resultado3 + " kWh = R$ " + valor3.toFixed(2) 

    let total = resultado1 + resultado2 + resultado3
    let valortotal = valor1 + valor2 + valor3
    document.getElementById("total").textContent = "O total de energia gasto foi de: " + total + " kWh = R$ " + valortotal.toFixed(2) 
} 