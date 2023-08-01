import React, { useState } from "react";
import axios from "axios";

const EventAddForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    date: "",
    start_time: "",
    end_time: "",
    location: "",
    price: 0,
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://jfest7.myserverhost.my.id/admin/event/add", formData, {
        headers: {
          Authorization: "Bearer YOUR_BEARER_TOKEN", // Replace YOUR_BEARER_TOKEN with the actual token
        },
      })
      .then((response) => {
        setSuccessMessage("Event added successfully!");
        setErrorMessage("");
      })
      .catch((error) => {
        if (error.response) {
          const status = error.response.status;
          if (status === 404) {
            setErrorMessage("Event not found.");
          } else if (status === 401) {
            setErrorMessage(
              "Unauthorized. Please check your authentication token."
            );
          } else if (status === 403) {
            setErrorMessage(
              "Forbidden. You do not have permission to access this resource."
            );
          } else {
            setErrorMessage("An error occurred while adding the event.");
          }
        } else {
          setErrorMessage("An error occurred while adding the event.");
        }
        setSuccessMessage("");
      });
  };

  return (
    <div>
      <h2>Add Event</h2>
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="start_time">Start Time:</label>
          <input
            type="time"
            id="start_time"
            name="start_time"
            value={formData.start_time}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="end_time">End Time:</label>
          <input
            type="time"
            id="end_time"
            name="end_time"
            value={formData.end_time}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Add Event</button>
      </form>
    </div>
  );
};

export default EventAddForm;
