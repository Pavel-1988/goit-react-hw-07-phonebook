import styled from 'styled-components';

export const List = styled.li`
  /* display: flex;
  align-items: center;
  font-size:20px;
  padding: 0; */

  display: flex;
	justify-content: space-between;
	align-items: center;
  font-size:20px;
  
  &>button {
    align-items: flex-end;
	margin-left: 5px;
	padding: 5px 10px;
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