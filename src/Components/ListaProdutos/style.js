import styled from "styled-components"


export const StyleListaProdutos = styled.ul`
display: flex;
flex-wrap: wrap;
gap: 20px;
width: 100%;
max-width: 100%;

@media (max-width: 768px) {
    display: inline-flexbox;
    height: 350px;
    overflow-x: scroll;
    flex-wrap: nowrap;
    max-width: 100%;
    padding: 0;
}
`
