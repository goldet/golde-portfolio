import React, { useState } from "react";

export default function ContactForm() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  //   Form validation
  const [errors, setErrors] = useState({});

  //   Setting button text
  const [buttonText, setButtonText] = useState("Send");

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (fullname.length <= 0) {
      tempErrors["fullname"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log("errors", errors);
    return isValid;
  };

     const [form, setForm] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    let isValidForm = handleValidation();
  
    if (isValidForm) {
      setButtonText("Sending");
      try {
        const res = await fetch("/api/sendgrid", {
          body: JSON.stringify({
            email: email,
            fullname: fullname,
            subject: subject,
            message: message,
          }),
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
        });
  
        const { error } = await res.json();
        if (error) {
          setShowSuccessMessage(false);
          setShowFailureMessage(true);
          setButtonText("Send");
          setFullname("");
          setEmail("");
          setMessage("");
          setSubject("");
          return;
        }
        setShowSuccessMessage(true);
        setShowFailureMessage(false);
        setButtonText("Send");
        setFullname("");
        setEmail("");
        setMessage("");
        setSubject("");
        function sleep(ms) {
          return new Promise((resolve) => setTimeout(resolve, ms));
        }

        await sleep(2000);
        setShowSuccessMessage(false);
      } catch (error) {
        console.error(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Send"); 
        setFullname("");
        setEmail("");
        setMessage("");
        setSubject("");
        function sleep(ms) {
          return new Promise((resolve) => setTimeout(resolve, ms));
        }

        await sleep(2000);
        setShowFailureMessage(false);
      }
    }
  };
  
  return (
    <main className="form-container">
      <form
        onSubmit={handleSubmit}
        className="rounded-lg shadow-xl flex flex-col px-8 py-8 bg-white dark:bg-blue-500"
      >

        <label htmlFor="fullname" className="contact-form-text">
          Full Name<div className="contact-error-form-text">*</div>
        </label>
        <input
          className="form-input"
          type="text"
          value={fullname}
          onChange={(e) => {
            setFullname(e.target.value);
          }}
          name="fullname"
        />
        {errors?.fullname && (
          <p className="contact-error-form-text">Full name cannot be empty.</p>
        )}

        <label htmlFor="email" className="contact-form-text">
          E-mail<div className="contact-error-form-text">*</div>
        </label>
        <input
          className="form-input"
          type="email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        {errors?.email && (
          <p className="contact-error-form-text">Email cannot be empty.</p>
        )}
        <label htmlFor="message" className="contact-form-text">
          Message<div className="contact-error-form-text">*</div>
        </label>
        <textarea
          className="form-input"
          name="message"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        ></textarea>
        {errors?.message && (
          <p className="contact-error-form-text">
            Message body cannot be empty.
          </p>
        )}
        <div className="flex flex-row items-center justify-start">
          <button type="submit" className="submit-button">
            {buttonText}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="airplane-icon"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
        <div className="text-left">
          {showSuccessMessage && (
            <p className="success-message">
              Thank you! Your Message has been delivered.
            </p>
          )}
          {showFailureMessage && (
            <p className="error-message">
              Oops! Something went wrong, please try again.
            </p>
          )}
        </div>
      </form>
    </main>
  );
}



