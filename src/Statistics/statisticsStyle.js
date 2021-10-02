import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 340px;
  margin: 0 auto 50px;
`;

export const List = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const Item = styled.li`
  flex-basis: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  outline: 1px solid rgb(188, 199, 206);
  font-weight: 500;
  color: #ffffff;
`;
