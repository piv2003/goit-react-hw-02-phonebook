import styled from 'styled-components';

export const Item = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 0.25rem;
  padding: 0.325rem 0.825rem 0.325rem 1.325rem;
  color: #fff;
  border-radius: 10px;
  background: #f560dc;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 0.5rem;
    background: #fff;
  }

  & button {
    margin-left: auto;
    padding: 5px;
    cursor: pointer;
  }
`;

export const Name = styled.span``;

export const Number = styled.span`
  color: #550404;
  font-weight: bold;
  text-shadow: 0 1px 0 #cccccc;
`;
