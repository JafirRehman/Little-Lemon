import React from "react";
import BookingForm from "./BookingForm";

const BookingPage = ({
  timeOptions,
  occasionOptions,
  selectedTime,
  setSelectedTime,
  selectedDate,
  setSelectedDate,
  selectedOccasion,
  setSelectedOccasion,
  submitForm,
}) => {
  return (
    <BookingForm
      timeOptions={timeOptions}
      occasionOptions={occasionOptions}
      selectedTime={selectedTime}
      setSelectedTime={setSelectedTime}
      selectedDate={selectedDate}
      setSelectedDate={setSelectedDate}
      selectedOccasion={selectedOccasion}
      setSelectedOccasion={setSelectedOccasion}
      submitForm={submitForm}
    />
  );
};

export default BookingPage;
