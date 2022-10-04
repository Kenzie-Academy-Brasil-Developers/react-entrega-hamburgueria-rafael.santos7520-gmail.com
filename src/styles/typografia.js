import styled from "styled-components"

export const StyledParagrafoCategory = styled.span`
    color: var(--Grey-50);
    margin-left: 15px;
    font-size: 12px;
    width: 100%;
    
`
export const StyledTitulo =  styled.h3`
  font-size: 18px;
  color: ${(props) =>  props.color};
  background-color: ${(props) =>  props.background};
`