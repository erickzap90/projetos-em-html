function mostrarPromocao(){
    //cria referencia aos elementos manipulados pelo programa
    var inProduto = document.getElementById("inProduto");
    var inPreco = document.getElementById("inPreco");
    var outVeiculo = document.getElementById("outProduto");
    var outTotal = document.getElementById("outTotal");
    var outDesconto = document.getElementById("outDesconto");
    var outTotalSem = document.getElementById("outTotalSem")
    // obtém conteudo do produto
    var produto = inProduto.value;
    var preco = Number(inPreco.value);
    //Calcula valor do desconto
    var total = ((preco * 3) * 0.60);
    var desconto = ((preco * 3) - total);
    var totalsem = (preco * 3);
   
    outVeiculo.textContent = "Item na promoção: " + produto;
    outTotal.textContent = "Total da compra com desconto R$: " + total.toFixed(2);
    outDesconto.textContent = "Desconto total da compra R$: " + desconto.toFixed(2);
    outTotalSem.textContent = "Total da compra sem desconto R$: " + totalsem.toFixed(2);
}

//cria uma referencia ao elemento btVerPromocao (botão)
var btVerPromocao = document.getElementById("btVerPromocao");
// registra um evento associado ao botão, para carregar mais uma função
btVerPromocao.addEventListener("click", mostrarPromocao);