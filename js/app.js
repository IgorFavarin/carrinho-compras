let precoTotal = 0;
function adicionar(){
    // recuperando valores do nome do produto, valor e quantidade
    let Produto = document.getElementById('produto').value;
    let nomeProduto = Produto.split('-')[0]; // split quebra uma string, criando um array de duas posições, 0 antes do separador, 1 depois do separador
    let valorProduto = Produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    
    //calculando preço subtotal
    let preco = quantidade * valorProduto;
    
    //adicionando na lista de produtor do carrinho
      if(quantidade >= 1){
      let carrinho = document.getElementById('lista-produtos');
      carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
      <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
      </section>`;
      precoTotal = precoTotal + preco;
      console.log(precoTotal);
      quantidade = document.querySelector('input');
      quantidade.value = 0;
  
    } else {
      alert("Deve informar a quantidade")
    }

   //preço total
   
    let somarPreco = document.querySelector('p');
    somarPreco.innerHTML = `<p class="carrinho__total">
    Total: <span class="texto-azul" id="valor-total">R$${precoTotal}</span>
    </p>`
   
   
}

function limpar(){
  quantidade = document.querySelector('input');
  quantidade.value = 0;
  let carrinho = document.getElementById('lista-produtos');
  carrinho.innerHTML = '';
  somarPreco = document.querySelector('p');
  somarPreco.innerHTML = `<p class="carrinho__total">
  Total: <span class="texto-azul" id="valor-total">R$0,00</span>
  </p>`
  precoTotal = 0;
}