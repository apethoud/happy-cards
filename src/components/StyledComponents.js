import styled from "styled-components";

export const Button = styled.button`
  padding: 8px;
  font-size: 16px;
  font-weight: 700;
  border: 1px solid #ccc;
  background-color: ${(props) => (props.selected ? "#ccc" : "#fff")};
  cursor: pointer;
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 8px;
`;
