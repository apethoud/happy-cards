import { useState, useRef } from "react";
import HolidayPickerModal from "./HolidayPickerModal";
import LabeledTextInput from "./LabeledTextInput";
import { Button, Label } from "./StyledComponents";

export default function CardForm(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [recipientEmail, setRecipientEmail] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  // const exampleRef = useRef();

  const {
    recipientName,
    setRecipientName,
    selectedHolidayName,
    setSelectedHolidayName,
    senderName,
    setSenderName,
  } = props;

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
    // console.log("exampleRef.current.value is: ", exampleRef.current.value);
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
            <Label>Pick a Holiday</Label>
            {selectedHolidayName ? (
              <div style={{ display: "flex" }}>
                <div style={{ marginRight: 16 }}>{selectedHolidayName}</div>
                <div
                  style={{ color: "#007d80", cursor: "pointer" }}
                  onClick={() => setIsModalOpen(true)}
                >
                  Edit
                </div>
              </div>
            ) : (
              <Button type="button" onClick={() => setIsModalOpen(true)}>
                Choose
              </Button>
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
          {/* <div>
            <Label htmlFor="exampleRef">
              Uncontrolled Input Example (using useRef())
            </Label>
            <input name="exampleRef" type="text" ref={exampleRef} />
          </div> */}
          <Button type="submit">Submit</Button>
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
