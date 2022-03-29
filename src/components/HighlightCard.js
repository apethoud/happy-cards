export default function HighlightCard({ icon, header, subtext }) {
  return (
    <div className="HighlightCard">
      <div className="HighlightCard-Icon">{icon}</div>
      <div className="HighlightCard-Header">{header}</div>
      <div className="HighlightCard-Subtext">{subtext}</div>
    </div>
  );
}
