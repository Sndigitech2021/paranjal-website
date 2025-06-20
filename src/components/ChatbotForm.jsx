
import React, { useState } from "react";

const ChatbotForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formsubmit.co/ajax/suhanachaudhary212@gmail.com", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      const result = await response.json();
      if (result.success === "true") {
        setIsSubmitted(true);
      } else {
        alert("There was an error. Please try again.");
      }
    } catch (err) {
      console.error("Form error:", err);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-5 right-5 text-3xl rounded-full p-4 h-[70px] w-[70px] shadow-lg z-50 transition-colors duration-300 ${
    isOpen ? "bg-gray-300 text-white" : "bg-blue-600 text-black"
  }`}
      >
        {isOpen ? "❌" : "✉️"}
      </button>

      {isOpen && (
        <div className="fixed bottom-20 right-5 w-full max-w-[90%] sm:max-w-[400px] max-h-[80vh] overflow-y-auto bg-white border rounded shadow-lg z-50">
          <div className="bg-blue-500 text-xl h-[90px] text-center text-black p-4 font-semibold rounded-t pt-8">
            Proswl Technology Private Limited
          </div>

          <div className="p-4">
            {!isSubmitted ? (
              <>
                <div className="bg-blue-100 text-sm text-gray-800 p-2 rounded mb-3">
                  Hi! Let us know how we can help and we’ll respond shortly.
                </div>
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name*"
                    required
                    className="w-full bg-gray-100 p-2 pt-3 pb-3 mb-6"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email*"
                    required
                    className="w-full bg-gray-100 p-2 pt-3 pb-3 mb-6"
                  />
                  <textarea
                    name="message"
                    placeholder="How can we help?*"
                    required
                    rows="3"
                    className="w-full bg-gray-100 p-2 pt-3 pb-3 mb-6"
                  ></textarea>

                  <div className="flex items-start gap-2 mb-3">
                    <input
                      type="checkbox"
                      name="sign"
                      id="sign"
                      required
                      className="mt-1"
                    />
                    <label htmlFor="sign" className="text-sm text-gray-700">
                      Sign up to receive email updates, announcements, and more.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
                  >
                    Send
                  </button>
                </form>
                <p className="text-gray-700 text-center text-sm mt-6 mb-4">This site is protected by reCAPTCHA and the Google <span className="text-blue-500">Privacy Policy</span> and <span className="text-blue-500">Terms of Service</span> apply.</p>
              </>
            ) : (
              <div className="text-center h-[80vh] text-gray-800">
                <div className="text-4xl text-blue-500 mb-3 mt-[50px]">✔️</div>
                <p className="text-blue-600 font-medium mb-3 mt-6">
                  Thanks for the message. We'll get back to you as soon as we can.
                </p>
                <div className="bg-gray-100 p-3 m-10 text-sm rounded">
                  We've sent you a confirmation email, please click the link to verify your address.
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ChatbotForm;


