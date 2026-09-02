function converter() {
    let opcao, valor, result;

    valor = parseFloat(document.getElementById('valor').value);
    opcao =  document.getElementById('conversor').value;

    switch (opcao) {
        case "1":
            result = (valor / 5.10);
            resultado.innerHTML = "Dólar US$ " + result.toFixed(2)
            console.log('pd');
            break;
        case "2":
            result = (valor / 5.91);
            resultado.innerHTML = "Euro € " + result.toFixed(2)
            break;
        default:
            resultado.innerHTML = "Opção inválida";
    }

}