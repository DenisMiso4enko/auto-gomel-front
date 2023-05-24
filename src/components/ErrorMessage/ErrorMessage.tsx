const ErrorMessage = ({message}: {message: string}) => {
  return (
    <div className="error-message container">
      <h3>{message}</h3>
    </div>
  );
};

export default ErrorMessage;