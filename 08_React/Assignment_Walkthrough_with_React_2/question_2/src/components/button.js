const Button = ({ buttonHandler, buttonText, style }) => {
  return (
    <button onClick={buttonHandler} className={`border border-white px-2 py-2 w-32 rounded-xl ${style}`}>
      {buttonText}
    </button>
  );
};

export default Button;
