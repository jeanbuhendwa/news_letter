import successIcon from "../Assets/icons/success.svg";

const SuccessMsg = ({ visible, onClose, email }) => {
  if (!visible) return null;
  const handleClose = (e) => {
    if (e.target.id === "success") {
      onClose();
    }
  };
  return (
    <section
      id="success"
      onClick={handleClose}
      className="fixed inset-0 text-center text-white bg-primary bg-opacity-50 backdrop-blur-sm flex items-center justify-center"
    >
      <div className="w-[80%] sm:w-[60%] md:w-[30%] flex flex-col items-start gap-5 py-8 p-5 md:px-12 bg-bgColor rounded-2xl">
        <img src={successIcon} alt="Success" className="w-10" />
        <h1 className="text-4xl md:text-5xl text-primary font-semibold text-start">
          Thanks for subscribing!
        </h1>
        <p className="text-[18px] text-textColor leading-6 font-normal text-start">
          A confirmation email has been sent to{" "}
          <span className="font-semibold">{email}</span>. Please open it and
          click the button inside to confirm your subscription.
        </p>
        <button
          onClick={onClose}
          className="w-full p-3 bg-primary text-[#e3e3e3] text-lg font-normal rounded-lg"
        >
          Dismiss message
        </button>
      </div>
    </section>
  );
};

export default SuccessMsg;
