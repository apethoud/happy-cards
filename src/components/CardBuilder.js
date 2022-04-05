import CardForm from "./CardForm";
import CardPreview from "./CardPreview";

export default function CardBuilder() {
  return (
    <div style={{ display: "flex" }}>
      <div className="CardForm-Wrapper">
        <CardForm />
      </div>
      <div className="CardPreview-Wrapper">
        <CardPreview />
      </div>
    </div>
  );
}
