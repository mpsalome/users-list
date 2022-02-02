import Alert from 'react-bootstrap/Alert';

export const CustomAlert = ({ title, variant, message }) => {
  return (
    <Alert variant={variant}>
      <Alert.Heading>{title}</Alert.Heading>
      <p>{message}</p>
    </Alert>
  );
};
