import styled from "styled-components";

export const StyledProdutoCardCarrinho = styled.li`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    padding: 10px 5px;
    box-sizing: border-box;

    img{
        width: 70px;
        height: 70px;
        background-color: var(--Grey-20);
        border-radius: 5px;
        ;
    }
    div{
        display: flex;
        flex-direction: column;
        height: fit-content;
        align-items:center;
        justify-content: center;
        gap: 10px;
        margin-left:10px;
        margin-right: auto;
        
        
        
        
    }
    
    button{
        color: var(--Grey-50);
        margin-top: 0;
        height: fit-content;
    }
    `


