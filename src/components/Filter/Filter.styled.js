import styled from 'styled-components';

export const FilterLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-weight:bold;
  gap: 5px;
  width:500px;
  padding:20px;

  &>input{
    display: block;
    width: 100%;
    margin: 5px 0px 30px 0px;
    border: 1px solid black;
    border-radius: 20px;
    padding: 10px;
  }
`;

