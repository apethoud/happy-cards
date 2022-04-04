import { useEffect, useState } from "react";
import ReactModal from "react-modal";
import _ from "lodash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

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
  setSelectedHolidayName,
}) {
  const [selectedTimeframe, setSelectedTimeframe] = useState("this_month");
  const [holidayList, setHolidayList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function getHolidays() {
      let params;
      if (selectedTimeframe === "this_year") {
        params = "year=2022";
      } else {
        params = "year=2022&month=4";
      }
      const url = `https://holidays.abstractapi.com/v1/?api_key=${API_KEY}&country=US&${params}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setHolidayList(data);
    }
    getHolidays();
  }, [selectedTimeframe]);

  useEffect(() => {
    ReactModal.setAppElement("body");
  }, []);

  function handleSelect(selectedHolidayName) {
    setSelectedHolidayName(selectedHolidayName);
    handleCloseModal();
  }

  function handleCloseModal() {
    setIsModalOpen(false);
    setSearchTerm("");
  }

  function getFilteredHolidayList() {
    return _.filter(holidayList, (holiday) => {
      return holiday.name.includes(searchTerm);
    });
  }

  return (
    <ReactModal isOpen={isModalOpen} style={modalStyles}>
      <div className="Modal-TitleBar">
        <div className="Modal-Title">Pick a Holiday</div>
        <div
          className="Modal-CloseButtonWrapper"
          onClick={() => handleCloseModal()}
        >
          <FontAwesomeIcon icon={faXmark} size="lg" />
        </div>
      </div>
      <div className="Modal-Section" style={{ display: "flex" }}>
        <input
          name="search"
          type="text"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          className="Input"
          style={{ marginRight: 16 }}
          placeholder="Search..."
        />
        <button
          className={`Button${
            selectedTimeframe === "this_month" ? " Selected" : ""
          }`}
          onClick={() => setSelectedTimeframe("this_month")}
        >
          This Month
        </button>
        <button
          className={`Button${
            selectedTimeframe === "this_year" ? " Selected" : ""
          }`}
          onClick={() => setSelectedTimeframe("this_year")}
        >
          This Year
        </button>
        <div style={{ padding: 8, fontStyle: "italic" }}>
          ({getFilteredHolidayList().length} options)
        </div>
      </div>
      {holidayList.length > 0 &&
        getFilteredHolidayList().map((holiday, index) => (
          <div
            key={index}
            className="Modal-TableRow"
            onClick={() => handleSelect(holiday.name)}
          >
            {holiday.date}: {holiday.name}
          </div>
        ))}
    </ReactModal>
  );
}
