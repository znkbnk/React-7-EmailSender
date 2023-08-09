
import React, { useState } from "react";
import emailjs from "emailjs-com";


const EmailForm = () => {
  const [partNumber, setPartNumber] = useState("");
  const [partDescription, setPartDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [orderNumber, setOrderNumber] = useState("");
  const [selectedEmail, setSelectedEmail] = useState("");
  const [notes, setNotes] = useState("");

  const savedEmails = [
    "email1@example.com",
    "email2@example.com",
    "email3@example.com",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
       emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS User ID

      // Replace 'YOUR_EMAILJS_SERVICE_ID', 'YOUR_EMAILJS_TEMPLATE_ID', 
      // and 'YOUR_EMAILJS_USER_ID'
      // with your EmailJS service ID, template ID, and user ID respectively.
      await emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
        partNumber,
        partDescription,
        quantity,
        orderNumber,
        selectedEmail,
        notes,
      });

      alert("Email sent successfully!");
    } catch (error) {
      alert("Failed to send email. Please try again later.");
      console.error(error);
    }
  };

  return (
    <div className='email-form-container'>
      <h2>Email Form</h2>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>Part Number:</label>
          <input
            type='text'
            value={partNumber}
            onChange={(e) => setPartNumber(e.target.value)}
            required
          />
        </div>
        <div className='form-group'>
          <label>Part Description:</label>
          <input
            type='text'
            value={partDescription}
            onChange={(e) => setPartDescription(e.target.value)}
            required
          />
        </div>
        <div className='form-group'>
          <label>Quantity:</label>
          <input
            type='number'
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
        </div>
        <div className='form-group'>
          <label>Order Number:</label>
          <input
            type='text'
            value={orderNumber}
            onChange={(e) => setOrderNumber(e.target.value)}
            required
          />
        </div>
        <div className='form-group'>
          <label>Saved Emails:</label>
          <select
            value={selectedEmail}
            onChange={(e) => setSelectedEmail(e.target.value)}
            required
          >
            <option value=''>Select an email</option>
            {savedEmails.map((email) => (
              <option key={email} value={email}>
                {email}
              </option>
            ))}
          </select>
        </div>
        <div className='form-group'>
          <label>Notes:</label>
          <textarea value={notes} onChange={(e) => setNotes(e.target.value)} />
        </div>
        <button type='submit' className='submit-button'>
          Send Email
        </button>
      </form>
    </div>
  );
};

export default EmailForm;
