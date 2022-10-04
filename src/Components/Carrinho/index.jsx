import { PrecoTotal } from "./PrecoTotal";
import { ProdutoCardCarrinho } from "./ProdutoCardCarrinho";
import { StyleListaProdutos } from "./../ListaProdutos/style";

export const Carrinho = ({ listaCarrinho, removerProduto,limparCarrinho}) => {
    
  return (

    <div>
      <StyleListaProdutos>
        {listaCarrinho.map((produto) => (
          <ProdutoCardCarrinho
            key={produto.id}
            produto={produto}
            removerProduto={removerProduto}
          />
        ))}
      </StyleListaProdutos>
      <PrecoTotal limparCarrinho={limparCarrinho} listaCarrinho={listaCarrinho} />
    </div>
  );
};
