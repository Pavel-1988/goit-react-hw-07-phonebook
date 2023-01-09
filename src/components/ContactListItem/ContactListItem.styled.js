import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  list-style-type: disc;
  font-size:18px;
  
  &>button {
    border-radius: 5px;
    padding: 3px;
    width: 50px;
    background-color: inherit;
    color: inherit;
    border-color: inherit;
    margin-left: 8px;
    justify-content:center;
  }
`