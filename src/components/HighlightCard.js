import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HighlightCard({ icon, header, subtext }) {
  return (
    <div className="HighlightCard">
      <div className="HighlightCard-Icon">
        <FontAwesomeIcon icon={icon} size="3x" />
      </div>
      <div className="HighlightCard-Header">{header}</div>
      <div className="HighlightCard-Subtext">{subtext}</div>
    </div>
  );
}
