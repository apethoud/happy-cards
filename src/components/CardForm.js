import { useState } from "react";
import HolidayPickerModal from "./HolidayPickerModal";
import LabeledTextInput from "./LabeledTextInput";

export default function CardForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [recipientName, setRecipientName] = useState("");
  const [recipientEmail, setRecipientEmail] = useState("");
  const [selectedHolidayName, setSelectedHolidayName] = useState("");
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const payload = {
      recipientName,
      recipientEmail,
      holidayName: selectedHolidayName,
      senderName,
      senderEmail,
    };
    console.log("payload is: ", payload);
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <LabeledTextInput
            name="Their Name"
            value={recipientName}
            setValue={setRecipientName}
          />
          <LabeledTextInput
            name="Their Email"
            value={recipientEmail}
            setValue={setRecipientEmail}
          />
          <div className="Form-InputWrapper">
            <div className="Label">Pick a Holiday</div>
            {selectedHolidayName ? (
              <div style={{ display: "flex" }}>
                <div style={{ marginRight: 16 }}>{selectedHolidayName}</div>
                <div
                  style={{ color: "#007d80" }}
                  onClick={() => setIsModalOpen(true)}
                >
                  Edit
                </div>
              </div>
            ) : (
              <button
                className="Button"
                type="button"
                onClick={() => setIsModalOpen(true)}
              >
                Choose
              </button>
            )}
          </div>
          <LabeledTextInput
            name="Your Name"
            value={senderName}
            setValue={setSenderName}
          />
          <LabeledTextInput
            name="Your Email"
            value={senderEmail}
            setValue={setSenderEmail}
          />
          <button type="submit" className="Button">
            Submit
          </button>
        </form>
      </div>
      <HolidayPickerModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        setSelectedHolidayName={setSelectedHolidayName}
      />
    </>
  );
}
