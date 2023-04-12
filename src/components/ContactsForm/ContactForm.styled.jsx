import styled from 'styled-components';

export const FormContainer = styled.div`
  background-color: #f2f2f2;
  padding: 20px;
  border-radius: 10px;
`;

export const FormTitle = styled.p`
  color: #333;
  font-size: 16px;
`;

export const FormInput = styled.input`
  background-color: #e6f2ff;
  border: none;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  font-size: 14px;
`;

export const FormButton = styled.button`
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #000;
  }
`;