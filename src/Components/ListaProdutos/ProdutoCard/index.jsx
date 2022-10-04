import { StyledParagrafoCategory } from "../../../styles/typografia";
import { StyledProdutoCard } from "./style";


export const ProdutoCard = ({ produto, handleClick }) => {
  return (
    <StyledProdutoCard>
      <div>
        <img src={produto.img} alt={produto.name} />
      </div>
      <h4>{produto.name}</h4>
      <StyledParagrafoCategory>
        {produto.category}
      </StyledParagrafoCategory>
      <p>{produto.price.toLocaleString(("pt-br"),{style: 'currency',currency:'BRL'})}</p>

      <button className="button-green" onClick={() => handleClick(produto)}>
        Adicionar
      </button>
    </StyledProdutoCard>
  );
};
