import styled from 'styled-components';


export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width:500px;
  padding:20px;

  &>label{
    display: flex;
    flex-direction: column;
    font-weight:bold;
    display: block;
  }

  &>button{
    width: 150px;
    margin: 10px 0 20px;
    padding: 10px 15px;
    border: 1px solid black;
    border-radius: 20px;
    cursor: pointer;
    transition: all 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  &>button:hover,
  button:focus{
    background-color: rgb(76, 75, 75);
    color: white;
  }

`

export const ListSpan = styled.span`
  margin-bottom: 5px;
`;

export const ListInput = styled.input`
    display: block;
    width: 100%;
    margin-bottom: 30px;
    border: 1px solid black;
    border-radius: 20px;
    padding: 10px;
`;

export const addBtn = styled.button`
  margin: 10px 0 20px;
  padding: 10px 15px;
  border: 1px solid black;
  border-radius: 20px;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.075, 0.82, 0.165, 1);

  /* .button:hover,
  .button:focus {
  background-color: rgb(76, 75, 75);
  color: white;} */

`;