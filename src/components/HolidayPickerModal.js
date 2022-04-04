import { useEffect, useState } from "react";
import ReactModal from "react-modal";
import { getMonthNumberByMonthName } from "./utils";

const API_KEY = process.env.REACT_APP_HOLIDAYS_API_KEY;

export default function HolidayPickerModal({
  isModalOpen,
  setIsModalOpen,
  selectedMonth,
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

  return (
    <ReactModal isOpen={isModalOpen}>
      <div>Pick a Holiday:</div>
      {holidayList.length > 0 &&
        holidayList.map((holiday, index) => (
          <div key={index}>
            {holiday.date}: {holiday.name}
          </div>
        ))}
      <button onClick={() => setIsModalOpen(false)}>Close</button>
    </ReactModal>
  );
}
