import styled from 'styled-components';

export const LabelFilter = styled.label`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  & span {
    margin-right: 10px;
    font-size: 18px;
    font-weight: 700;
    color: #d4f783;
    text-shadow: 3px 5px 2px #474747;
  }
`;

export const InputFilter = styled.input`
  padding: 0 20px;
  background: #f6f6e9;
  line-height: 40px;
  border-width: 0;
  border-radius: 20px;
  font-family: 'Roboto', sans-serif;
  font-style: italic;
  font-size: 18px;
  cursor: pointer;
`;
