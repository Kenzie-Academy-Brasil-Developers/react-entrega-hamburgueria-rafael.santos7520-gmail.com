import { useState } from "react";
import { useEffect } from "react";
import { StylePrecoTotal } from './style';

export const PrecoTotal = ({ listaCarrinho,limparCarrinho }) => {
  const [cartTotal, setCartTotal] = useState(0);
  useEffect(() => {
    const total = listaCarrinho.reduce((acc, cur) => acc + cur.price, 0);
    setCartTotal(total);
  }, [cartTotal, listaCarrinho]);
  

  return (
    <StylePrecoTotal>
      <strong>Total</strong>
      <span>
        {
        cartTotal.toLocaleString(("pt-br"),{style: 'currency',currency:'BRL'})
        }
      </span>
      <button onClick={limparCarrinho} className="btnAllRemove">Remover tudo</button>
    </StylePrecoTotal>

  );
};
