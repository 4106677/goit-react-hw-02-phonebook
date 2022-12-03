import styled from 'styled-components';

export const Box = styled.ul`
  margin-top: 15px;
  padding: 10px 0px;

  width: 400px;

  background-color: aliceblue;

  border-radius: 20px;
`;

export const Contact = styled.li`
  &:not(:first-child) {
    border-top: 1px solid gray;
  }
  padding: 10px 10px 10px 20px;

  width: 370px;
`;
