import styled from "styled-components";

export const StyledContainerCarrinho = styled.section`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 450px;
  background-color: var(--Grey-0);
  border-radius: 8px;
  min-width:250px;
 

  h3 {
    padding: 1rem;
    margin: 0;
    font-weight: 700;
    border-radius: 8px 8px 0 0;
    background-color: var(--Color-primary);
  }
  .sacolaVazia{
    margin: 50% auto;
    font-size: 24px;
    height: 200px;
   
  }
  @media (max-width:720px){
    width: 100%;
    max-width: 100%;
    margin-top: 20px;
      ul{
        
        display: block;
        box-sizing: border-box;

      }
  }



`;
