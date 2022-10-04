import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

body{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
}



ul,ol,li {
    list-style: none;
    padding: 0;
    margin: 0;
}
 button{
    border: none;
    cursor: pointer;
    background: transparent;
 }
 img{
    max-width: 100%;
    max-height: 100%;
 }

 :root{
    --Color-primary:#27AE60;
    --Color-primary-50:#93D7AF;
    --Color-secondary:#EB5757;
    --Color-White:#fff;

    /* Grey Scale Palette */
    --Grey-100:#333333;
    --Grey-50:#828282;
    --Grey-20:#E0E0E0;
    --Grey-0:#F5F5F5;

    /* Feedback Palette */
    --Negative:#E60000;
    --Warning:#FFCD07;
    --Sucess:#168821;
    --Information:#155BCB;

 }

 header{
   box-sizing: border-box;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    padding: 0 80px;
    background-color: var(--Color-White);
    box-shadow: rgba(100, 100, 111, 0.2) 0px 5px 5px 0px;
         div{
            max-width: 100%;
         display: flex;
         margin: 0;
         padding: 0;
         box-sizing: content-box;
 }
  
 @media (max-width:720px) {
      flex-direction: column;
      height: 130px;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      justify-content: center;
      gap: 10px;
   }


 form{
   width: 100%;
   display: flex;
   border: 1px solid var(--Grey-20);
   border-radius: 8px;
   padding: 5px;
   }

 }

 

 main{
   max-width: 100%;
   display: flex;
   justify-content: space-between;
   margin-top: 40px;
      
   flex-direction: row;
   flex-wrap: wrap;
   padding: 0 80px 20px 80px;

   @media (max-width:720px) {
      margin: 20px auto;
      max-width: 100%;
      flex-direction: column;
      padding: 0 20px;
   }
 }

 input {
   max-width: 100%;
   height: 40px;
   border-radius: 8px;
   padding: 0px 10px 0px 20px;
   box-sizing: border-box;
   border: none;
   transition: ease-in 0.3s;
::placeholder{
   color: var(--Grey-20);
   
}
}
input:focus{
   outline: none;
   border:none
}



section{
   height: 735px;
   max-width: 650px;
   top: 80px;

   @media (max-width:720px) {
      max-width: 100%;
      margin: 0;
      padding:0;
      height: fit-content;
   }
}
`;
