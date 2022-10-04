/* eslint-disable no-unreachable */

import { ProdutoCard } from "../ListaProdutos/ProdutoCard";
import { StyleListaProdutos } from './style';

export const ListaProdutos = ({produtos,handleClick}) => {
  return (
    <StyleListaProdutos>
      {
        produtos.map((produto) =>
          <ProdutoCard key={produto.id} produto={produto} handleClick={handleClick} />
        )
        }
    </StyleListaProdutos>
  )
  }
