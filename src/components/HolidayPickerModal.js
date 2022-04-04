import { useEffect, useState } from "react";
import ReactModal from "react-modal";
import { getMonthNumberByMonthName } from "./utils";

const API_KEY = process.env.REACT_APP_HOLIDAYS_API_KEY;

const modalStyles = {
  overlay: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    position: "relative",
    width: 800,
    height: 600,
    inset: 0,
    padding: 0,
  },
};

export default function HolidayPickerModal({
  isModalOpen,
  setIsModalOpen,
  selectedMonth,
  setSelectedHolidayName,
}) {
  const [holidayList, setHolidayList] = useState([]);

  useEffect(() => {
    async function getHolidays() {
      let monthParam = getMonthNumberByMonthName(selectedMonth);
      const url = `https://holidays.abstractapi.com/v1/?api_key=${API_KEY}&country=US&year=2022&month=${monthParam}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setHolidayList(data);
    }
    getHolidays();
  }, [selectedMonth]);

  useEffect(() => {
    ReactModal.setAppElement("body");
  }, []);

  function handleSelect(selectedHolidayIndex) {
    setSelectedHolidayName(holidayList[selectedHolidayIndex].name);
    setIsModalOpen(false);
  }

  return (
    <ReactModal isOpen={isModalOpen} style={modalStyles}>
      <div className="Modal-TitleBar">Pick a Holiday</div>
      {holidayList.length > 0 &&
        holidayList.map((holiday, index) => (
          <div
            key={index}
            className="Modal-TableRow"
            onClick={() => handleSelect(index)}
          >
            {holiday.date}: {holiday.name}
          </div>
        ))}
    </ReactModal>
  );
}
