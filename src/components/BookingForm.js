import React, { useState } from "react";

const BookingForm = ({
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
  const [guests, setGuests] = useState(1); // Default guests to 1

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      date: selectedDate,
      time: selectedTime,
      guests,
      occasion: selectedOccasion,
    };
    submitForm(formData);
  };

  return (
    <section className="booking-form">
      <form onSubmit={handleSubmit}>
        <fieldset>
          {/* Date Selection */}
          <div>
            <label htmlFor="book-date">Choose Date:</label>
            <input
              id="book-date"
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              required
            />
          </div>

          {/* Time Selection */}
          <div>
            <label htmlFor="book-time">Choose Time:</label>
            <select
              id="book-time"
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              required
            >
              {timeOptions.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>

          {/* Number of Guests */}
          <div>
            <label htmlFor="book-guests">Number of Guests:</label>
            <input
              id="book-guests"
              type="number"
              min={1}
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              required
            />
          </div>

          {/* Occasion Selection */}
          <div>
            <label htmlFor="book-occasion">Occasion:</label>
            <select
              id="book-occasion"
              value={selectedOccasion}
              onChange={(e) => setSelectedOccasion(e.target.value)}
              required
            >
              {occasionOptions.map((occasion) => (
                <option key={occasion} value={occasion}>
                  {occasion}
                </option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <div className="reservation-button">
            <button type="submit">Make Your Reservation</button>
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default BookingForm;
