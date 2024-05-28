

const ErrorMessage = ({
  message = "Oops, something went wrong, please reload the page! 😢😢😢",
}) => {
  return <p>{message}</p>;
};

export default ErrorMessage;