import styled from "styled-components";

export const Wrapper = styled.div`
  background: #eaf2fb;
  padding: 20px;
  border-radius: 10px;
`;

export const Label = styled.label`
  display: block;
  margin: 10px 0 5px;
  font-weight: bold;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #aaa;
  border-radius: 5px;
  margin-bottom: 15px;
`;

export const Button = styled.button`
  width: 100%;
  background: #007bff;
  color: white;
  border: none;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #0056b3;
  }
`;