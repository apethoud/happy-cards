export default function CardPreview(props) {
  const { recipientName, selectedHolidayName, senderName } = props;
  return (
    <>
      <div>Card Preview</div>
      <div>{recipientName}</div>
      <div>{selectedHolidayName}</div>
      <div>{senderName}</div>
    </>
  );
}
