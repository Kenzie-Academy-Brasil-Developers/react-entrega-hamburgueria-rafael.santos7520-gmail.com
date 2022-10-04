import styled from "styled-components";

export const StyledProdutoCard = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 330px;
  width: 200px;
  box-sizing: border-box;

  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  border: 1px solid var(--Grey-20);
  border-radius: 8px;

  transition: all 0.3s;

  @media (max-width:720px) {
    width: 250px;
  }


  div {
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: var(--Grey-0);
    border-radius: 8px 8px 0 0;
    height: 150px;
  }
  :hover {
    scale: 1.02;
    border-color: var(--Grey-100);
  }

  button {
    height: 30px;
    margin-left: 15px;
    margin-bottom: 20px;
  }
  h4 {
    font-size: 18px;
    margin-left: 15px;
  }

  p {
    color: var(--Color-primary);
    font-weight: 600;
    margin-left: 15px;
    font-size: 16px;
  }
`;
