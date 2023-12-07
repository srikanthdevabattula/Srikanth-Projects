import React, { useState } from "react";
import "./../Contactus.css";
import { AiFillCloseCircle } from "react-icons/ai";

function ContactUsForm({ setContactForm }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://your-backend-api.com/submit-contact-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log("Form submitted successfully!");
        setContactForm(false);
      } else {
        console.error("Form submission failed.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="modalBackground flex justify-center z-[1000] fixed">
      <div className="modalContainer w-[600px] h-[550px] md:h-[450px] md:w-[480px] sm:w-[85%] sm:h-[410px] bg-[white] rounded-[12px] p-[20px]">
        <div className="titleCloseBtn flex justify-end">
          <button
            onClick={() => {
              setContactForm(false);
            }}
            className="sm:text-[20px] md:text-[30px] text-[30px] absolute text-[#FFDA18]"
          >
            <AiFillCloseCircle />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col m-[5%] space-y-3 md:m-[0%]">
            <h1 className="font-bold text-[45px] md:text-[30px] sm:text-[20px]">Contact Us</h1>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="placeholder:text-[black] border-[2px] border-[black] rounded-[15px] p-2"
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="placeholder:text-[black] border-[2px] border-[black] rounded-[15px] p-2"
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              className="placeholder:text-[black] border-[2px] border-[black] rounded-[15px] p-2"
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Any Message"
              className="placeholder:text-[black] border-[2px] border-[black] rounded-[15px] p-2"
              onChange={handleChange}
            ></textarea>
            <button
              type="submit"
              className="bg-[#FFDA18] rounded-[15px] h-[61px] w-[145px] md:h-[50px] md:w-[120px] sm:h-[30px] sm:w-[100px] font-bold text-[18px] sm:text-[12px]"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactUsForm;
