import React, { useState } from "react";
import validator from "validator";
import SuccessMsg from "./SuccessMsg";

const NewsInfo = () => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleClose = () => {
    setShowModal(false);
    setEmail("");
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validator.isEmail(email)) {
      setError("Valid Email required");
      return;
    }
    setShowModal(true);
  };
  return (
    <section>
      <h1 className="text-5xl font-bold text-primary my-5">Stay updated!</h1>
      <p className="text-lg text-textColorDark font-medium text-start tracking-wide">
        Join 60,000+ product managers receiving monthly updates on:
      </p>
      <ul className="flex flex-col gap-[5px] my-5">
        <li className="flex items-center gap-3 font-normal text-lg text-textColor">
          <i class="fa-solid fa-circle-check" style={{ color: "#fe6423" }}></i>
          <span>Product discovery and building what matters</span>
        </li>
        <li className="flex items-center gap-3 font-normal text-lg text-textColor">
          <i class="fa-solid fa-circle-check" style={{ color: "#fe6423" }}></i>
          <span>Measuring to ensure updates are a success</span>
        </li>
        <li className="flex items-center gap-3 font-normal text-lg text-textColor">
          <i class="fa-solid fa-circle-check" style={{ color: "#fe6423" }}></i>
          <span>And much more!</span>
        </li>
      </ul>
      <form className="my-5 flex flex-col gap-3" onSubmit={handleSubmit}>
        <label className="text-lg font-semibold flex justify-between items-center">
          <span>Email address</span>
          <span className="text-red-500 text-sm">{error}</span>
        </label>
        <input
          type="email"
          placeholder="email@company.com"
          className={`p-3 border-2 rounded-lg ${
            error ? "border-red-500 bg-red-100 text-red-500" : "border-gray-300"
          }`}
          value={email}
          onChange={handleEmailChange}
          required
        />
        <button
          type="submit"
          className="p-3 bg-primary text-[#e3e3e3] text-lg font-normal rounded-lg"
        >
          Subscribe to monthly newsletter
        </button>
      </form>
      <SuccessMsg onClose={handleClose} visible={showModal} email={email} />
    </section>
  );
};

export default NewsInfo;
