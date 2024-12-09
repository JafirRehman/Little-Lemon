import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Banner from "./Banner";
import BookingPage from "./BookingPage";
import ConfirmedBooking from "./ConfirmedBooking";

const Main = () => {
  // Define arrays for times and occasions
  const timeOptions = ["17:00", "18:00", "19:00", "20:00"];
  const occasionOptions = ["Birthday", "Anniversary"];

  // State variables for user selections
  const [selectedTime, setSelectedTime] = useState(timeOptions[0]); // Default to the first time
  const [selectedDate, setSelectedDate] = useState(""); // No date selected by default
  const [selectedOccasion, setSelectedOccasion] = useState(occasionOptions[0]); // Default to the first occasion
  const navigate = useNavigate();

  // Function to handle form submission
  const submitForm = (formData) => {
    console.log("Form Data Submitted:", formData);
    navigate("/confirmed");
  };

  return (
    <main>
      <Routes>
        {/* Home page */}
        <Route path="/" element={<Banner />} />

        {/* Booking page */}
        <Route
          path="/booking"
          element={
            <BookingPage
              timeOptions={timeOptions} // Pass available times
              occasionOptions={occasionOptions} // Pass occasion options
              selectedTime={selectedTime} // Pass selected time
              setSelectedTime={setSelectedTime} // Pass setter for time
              selectedDate={selectedDate} // Pass selected date
              setSelectedDate={setSelectedDate} // Pass setter for date
              selectedOccasion={selectedOccasion} // Pass selected occasion
              setSelectedOccasion={setSelectedOccasion} // Pass setter for occasion
              submitForm={submitForm} // Pass form submission handler
            />
          }
        />

        {/* Confirmation page */}
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
};

export default Main;
