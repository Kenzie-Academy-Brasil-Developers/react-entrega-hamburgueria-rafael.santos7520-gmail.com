
import { StyledProdutoCardCarrinho } from './style';
import { StyledParagrafoCategory } from './../../../styles/typografia';
export const ProdutoCardCarrinho = ({produto,removerProduto}) => {
    return(
        <StyledProdutoCardCarrinho>
            <img src={produto.img} alt={`imagem produto ${produto.name}`} />
            <div>
            <strong>{produto.name}</strong>
            <StyledParagrafoCategory>{produto.category}</StyledParagrafoCategory>
            </div>
            <button onClick={()=>removerProduto(produto)}>Remover</button>
        </StyledProdutoCardCarrinho>
    )

}
