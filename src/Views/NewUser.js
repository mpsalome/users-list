import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch } from 'react-redux';
import { addUser } from '../store/actions/users';
import { useNavigate } from 'react-router-dom';

export const NewUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: undefined,
    username: undefined,
    email: undefined,
    address: {
      city: undefined,
    },
  });
  const [errors, setErrors] = useState({});


  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      dispatch(addUser(formData));
      navigate('/');
    } 
  };

  const handleValidation = () => {
    let fields = formData;
    let currentErrors = {};
    let formIsValid = true;

    //Name
    if (!fields["name"]) {
      formIsValid = false;
      currentErrors["name"] = "Cannot be empty";
    }

    if (typeof fields["name"] !== "undefined") {
      if (!fields["name"].match(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/)) {
        formIsValid = false;
        currentErrors["name"] = "Only letters";
      }
    }

    //Email
    if (!fields["email"]) {
      formIsValid = false;
      currentErrors["email"] = "Cannot be empty";
    }

    if (typeof fields["email"] !== "undefined") {
      let lastAtPos = fields["email"].lastIndexOf("@");
      let lastDotPos = fields["email"].lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          fields["email"].indexOf("@@") === -1 &&
          lastDotPos > 2 &&
          fields["email"].length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        currentErrors["email"] = "Email is not valid";
      }
    }

    //Username
    if (!fields["username"]) {
      formIsValid = false;
      currentErrors["username"] = "Cannot be empty";
    }

    //City 
    if (!fields.address["city"]) {
      formIsValid = false;
      currentErrors["city"] = "Cannot be empty";
    }

    setErrors({...currentErrors});
    return formIsValid;
  }


  return (
    <div className="wrapper">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        <span className="errorLabel">{errors["name"]}</span>
        </Form.Group>

        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
          />
        <span className="errorLabel">{errors["username"]}</span>
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        <span className="errorLabel">{errors["email"]}</span>
        </Form.Group>

        <Form.Group className="mb-3" controlId="city">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            value={formData.address.city}
            onChange={(e) =>
              setFormData({ ...formData, address: { city: e.target.value } })
            }
          />
        <span className="errorLabel">{errors["city"]}</span>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <LinkContainer to="/">
          <Button variant="secondary" size="md">
            Cancel
          </Button>
        </LinkContainer>
      </Form>
    </div>
  );
};
