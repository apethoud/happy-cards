import { useState } from "react";
import HolidayPickerModal from "./HolidayPickerModal";

export default function HolidayPicker() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState("March");
  const [selectedHolidayName, setSelectedHolidayName] = useState("");

  return (
    <>
      <div>
        <div style={{ fontWeight: "bold" }}>Selected Holiday:</div>
        {selectedHolidayName ? (
          <>
            <div>{selectedHolidayName}</div>
            <button onClick={() => setIsModalOpen(true)}>Edit</button>
          </>
        ) : (
          <button onClick={() => setIsModalOpen(true)}>Choose</button>
        )}
      </div>
      <HolidayPickerModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        selectedMonth={selectedMonth}
      />
    </>
  );
}
