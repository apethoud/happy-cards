import ReactModal from "react-modal";

export default function HolidayPickerModal({ isModalOpen, setIsModalOpen }) {
  return (
    <ReactModal isOpen={isModalOpen}>
      <div>Modal contents</div>
      <button onClick={() => setIsModalOpen(false)}>Close</button>
    </ReactModal>
  );
}
