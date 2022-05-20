import styled from "styled-components";

export const AppBackground = styled.div`
  ${(props) =>
    props.theme.theme === "dark"
      ? `
      background-color: #333;
    `
      : `
      background-color: #fff;
    `}
`;

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
  ${(props) =>
    props.theme.theme === "dark"
      ? `
      color: #aaa;
    `
      : `
      color: #000;
    `}
`;

export const Input = styled.input`
  padding: 8px;
  font-size: 16px;
  ${(props) =>
    props.theme.theme === "dark"
      ? `
      background-color: #222;
      border: 1px solid #777;
    `
      : `
      background-color: #fff;
      border: 1px solid #ccc;
    `}
`;
