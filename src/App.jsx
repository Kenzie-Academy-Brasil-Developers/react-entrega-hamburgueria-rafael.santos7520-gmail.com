/* eslint-disable react-hooks/exhaustive-deps */
import { Carrinho } from "./Components/Carrinho";
import { ListaProdutos } from "./Components/ListaProdutos/index";
import { useState, useEffect } from "react";
import { BuscarProdutos } from "./Components/services/buscarProdutos";
import logo from "./Components/assets/img/Logo.jpg"
// import { PrecoTotal } from "./Components/Carrinho/PrecoTotal";
import { StyledContainerCarrinho } from "./styles/carrinhoContainer";
import { StyledParagrafoCategory, StyledTitulo } from "./styles/typografia";

const App = () => {
  const [textoBusca, setBusca] = useState("");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
 

  const limparCarrinho = () => setCurrentSale([])

  const pesquisar = (textoBusca) => {
    const produtosfiltrados = products.filter((product) =>
      product.name.toLowerCase().includes(textoBusca)
    );
    produtosfiltrados.length ? (
      setFilteredProducts(produtosfiltrados)
    ) : (
      <p>Produto Nao encontrado</p>
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    pesquisar(textoBusca);
  };

  const limparPesquisa = () => {
    setBusca("");
    setFilteredProducts([]);
  
  };

  const onSucess = (resp) => {
    setProducts(resp.data);
  };
  const onError = (err) => {
    console.log(err);
  };

  useEffect(() => {
    BuscarProdutos(onSucess, onError);
  }, []);

  useEffect(() => {
    pesquisar(textoBusca);
  }, [textoBusca]);

  const AddProdutoCarrinho = (product) => {
    const copiaCarrinho = [...currentSale];
    const produtoAdd = copiaCarrinho.find((ele) => ele.id === product.id);

    if (!produtoAdd) {
      copiaCarrinho.push(product);
    } else {
    }
    setCurrentSale(copiaCarrinho);
  };

  const handleClick = (produto) => {
    AddProdutoCarrinho(produto);
  };

  const removerProduto = (produdo) => {
    const novoCarrinho = currentSale.filter((e) => e !== produdo);
    setCurrentSale(novoCarrinho);
  };



  return (
    <div className="container">
      <header>
        
        { <img src={logo} alt="" /> }
        <div>
          <form onSubmit={handleSubmit}>
            <input
            value={textoBusca}
              onChange={(e) => setBusca(e.target.value)}
              name="textoBuscaInput"
              placeholder="pesquisar produtos"
            />
            <button className="button-green" type="submit">
              Pesquisar
            </button>
          </form>
        </div>
      </header>
      <main>
        <section>
          <div>
            {filteredProducts.length ? (
              <div>
                {textoBusca !== "" ? (
                  <div className="headerBusca">
                  <button onClick={()=>limparPesquisa()} className="button-green">Limpar busca</button>
                  <h2>Resultados Para {textoBusca} </h2>
                  </div>
                  
                ) : (
                  ""
                )}
                <ListaProdutos produtos={filteredProducts} />
              </div>
            ) : (
              <ListaProdutos produtos={products} handleClick={handleClick} />
            )}
          </div>
        </section>
        <StyledContainerCarrinho>
          <StyledTitulo color="white" background="#27AE60">Carrinho de compras</StyledTitulo>
          {
          currentSale.length ?
          <Carrinho
          limparCarrinho={limparCarrinho}
          listaCarrinho={currentSale}
          removerProduto={removerProduto}/>
          : 
          <strong className="sacolaVazia">sua sacola está vazia</strong>
        }
        </StyledContainerCarrinho >
      </main>
    </div>
  );
};

export default App;

