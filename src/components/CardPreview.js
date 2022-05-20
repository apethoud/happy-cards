export default function CardPreview(props) {
  const { recipientName, selectedHolidayName, senderName } = props;

  return (
    <>
      <div style={{ display: "flex" }}>
        <div className="CardPreview-Text">Hey&nbsp;</div>
        {recipientName ? (
          <div className="CardPreview-Text">{recipientName}</div>
        ) : (
          <div className="CardPreview-Text CardPreview-PlaceholderText">
            Recipient Name
          </div>
        )}
        <div className="CardPreview-Text">!</div>
      </div>
      <div style={{ display: "flex" }}>
        <div className="CardPreview-Text">I hope you have a great&nbsp;</div>
        {selectedHolidayName ? (
          <div className="CardPreview-Text">{selectedHolidayName}</div>
        ) : (
          <div className="CardPreview-Text CardPreview-PlaceholderText">
            Holiday
          </div>
        )}
        <div className="CardPreview-Text">!</div>
      </div>
      <div style={{ display: "flex" }}>
        <div className="CardPreview-Text">From&nbsp;</div>
        {senderName ? (
          <div className="CardPreview-Text">{senderName}</div>
        ) : (
          <div className="CardPreview-Text CardPreview-PlaceholderText">
            Sender Name
          </div>
        )}
      </div>
    </>
  );
}
