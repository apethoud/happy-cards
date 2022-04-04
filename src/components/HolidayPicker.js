import { useState } from "react";
import HolidayPickerModal from "./HolidayPickerModal";

export default function HolidayPicker() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedHolidayName, setSelectedHolidayName] = useState("");

  return (
    <>
      <div>
        <div style={{ fontWeight: "bold" }}>Selected Holiday:</div>
        {selectedHolidayName ? (
          <>
            <div>{selectedHolidayName}</div>
            <button className="Button" onClick={() => setIsModalOpen(true)}>
              Edit
            </button>
          </>
        ) : (
          <button className="Button" onClick={() => setIsModalOpen(true)}>
            Choose
          </button>
        )}
      </div>
      <HolidayPickerModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        setSelectedHolidayName={setSelectedHolidayName}
      />
    </>
  );
}
