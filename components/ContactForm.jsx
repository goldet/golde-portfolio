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
      } catch (error) {
        console.error(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Send");
  
     
        setFullname("");
        setEmail("");
        setMessage("");
        setSubject("");
      }
    }
    console.log(fullname, email, subject, message);
  };
  
  return (
    <main className="form-container">
      <form
        onSubmit={handleSubmit}
        className="rounded-lg shadow-xl flex flex-col px-8 py-8 bg-white dark:bg-blue-500"
      >
{/*         <h1 className="contact-form-heading">Send a message</h1>
 */}
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

      <section className="">
        <h1 className={`reach-out ${errors ? "md:mt-80" : "md:mt-60"}`}>
          Reach out
        </h1>
        <div>
          <div className="call-section">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="phone-icon"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 12C22 10.6868 21.7413 9.38647 21.2388 8.1731C20.7362 6.95996 19.9997 5.85742 19.0711 4.92896C18.1425 4.00024 17.0401 3.26367 15.8268 2.76123C14.6136 2.25854 13.3132 2 12 2V4C13.0506 4 14.0909 4.20703 15.0615 4.60889C16.0321 5.01099 16.914 5.60034 17.6569 6.34326C18.3997 7.08594 18.989 7.96802 19.391 8.93848C19.7931 9.90918 20 10.9495 20 12H22Z"
                fill="currentColor"
              />
              <path
                d="M2 10V5C2 4.44775 2.44772 4 3 4H8C8.55228 4 9 4.44775 9 5V9C9 9.55225 8.55228 10 8 10H6C6 14.4182 9.58173 18 14 18V16C14 15.4478 14.4477 15 15 15H19C19.5523 15 20 15.4478 20 16V21C20 21.5522 19.5523 22 19 22H14C7.37259 22 2 16.6274 2 10Z"
                fill="currentColor"
              />
              <path
                d="M17.5433 9.70386C17.8448 10.4319 18 11.2122 18 12H16.2C16.2 11.4485 16.0914 10.9023 15.8803 10.3928C15.6692 9.88306 15.3599 9.42017 14.9698 9.03027C14.5798 8.64014 14.1169 8.33081 13.6073 8.11963C13.0977 7.90869 12.5515 7.80005 12 7.80005V6C12.7879 6 13.5681 6.15527 14.2961 6.45679C15.024 6.7583 15.6855 7.2002 16.2426 7.75732C16.7998 8.31445 17.2418 8.97583 17.5433 9.70386Z"
                fill="currentColor"
              />
            </svg>
            <p className="contact-form-text">+34 697831082</p>
          </div>
        </div>
      </section>
    </main>
  );
}




/* const handleSubmit = async (e) => {
  e.preventDefault();

  let isValidForm = handleValidation();

  if (isValidForm) {
    setButtonText("Sending");
    try {
      const res = await fetch("http://localhost:3000/api/sendgrid", {
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
    } catch (error) {
      console.error(error);
      setShowSuccessMessage(false);
      setShowFailureMessage(true);
      setButtonText("Send");

  
      setFullname("");
      setEmail("");
      setMessage("");
      setSubject("");
    }
  }
  console.log(fullname, email, subject, message);
}; */