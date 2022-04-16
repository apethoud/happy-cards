import { Label, Input } from "./StyledComponents";

export default function LabeledTextInput({ name, value, setValue }) {
  return (
    <div className="Form-InputWrapper">
      <Label htmlFor={name}>{name}</Label>
      <Input
        name={name}
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </div>
  );
}
