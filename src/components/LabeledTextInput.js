export default function LabeledTextInput({ name, value, setValue }) {
  return (
    <div className="Form-InputWrapper">
      <label className="Label" htmlFor={name}>
        {name}
      </label>
      <input
        className="Input"
        name={name}
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </div>
  );
}
