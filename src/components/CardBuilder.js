import CardForm from "./CardForm";

export default function CardBuilder() {
  return (
    <div style={{ display: "flex" }}>
      <div className="CardForm-Wrapper">
        <CardForm />
      </div>
      {/* <CardPreview /> */}
    </div>
  );
}
