import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch } from 'react-redux';
import { addUser, editUser } from '../store/actions/users';
import { useNavigate } from 'react-router-dom';

export const UserForm = ({ user, action }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    address: {
      city: '',
    },
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setData();
  }, []);

  const setData = () => {
    if (user) {
      setFormData(...user);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      if (action === 'add') {
        dispatch(addUser(formData));
      } else if (action === 'edit') {
        dispatch(editUser(formData));
      }
      navigate('/');
    }
  };

  const handleValidation = () => {
    let fields = formData;
    let currentErrors = {};
    let formIsValid = true;

    //Name
    if (!fields['name']) {
      formIsValid = false;
      currentErrors['name'] = 'Cannot be empty';
    }

    if (fields['name'] !== '') {
      if (
        !fields['name'].match(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/)
      ) {
        formIsValid = false;
        currentErrors['name'] = 'Only letters';
      }
    }

    //Email
    if (!fields['email']) {
      formIsValid = false;
      currentErrors['email'] = 'Cannot be empty';
    }

    if (fields['email'] !== '') {
      let lastAtPos = fields['email'].lastIndexOf('@');
      let lastDotPos = fields['email'].lastIndexOf('.');

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          fields['email'].indexOf('@@') === -1 &&
          lastDotPos > 2 &&
          fields['email'].length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        currentErrors['email'] = 'Email is not valid';
      }
    }

    //Username
    if (fields['username'] !== '') {
      if (
        !fields['username'].match(
          /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/
        )
      ) {
        formIsValid = false;
        currentErrors['username'] = 'Invalid character detected';
      }
    }

    //City
    if (!fields.address['city'] !== '') {
      if (
        !fields.address['city'].match(
          /^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/
        )
      ) {
        formIsValid = false;
        currentErrors['city'] = 'Invalid character detected';
      }
    }

    setErrors({ ...currentErrors });
    return formIsValid;
  };

  return (
    <div className="wrapper">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            placeholder="Name"
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <span className="errorLabel">{errors['name']}</span>
        </Form.Group>

        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            placeholder="Username"
            type="text"
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
          />
          <span className="errorLabel">{errors['username']}</span>
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            required
            placeholder="Email address"
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <span className="errorLabel">{errors['email']}</span>
        </Form.Group>

        <Form.Group className="mb-3" controlId="city">
          <Form.Label>City</Form.Label>
          <Form.Control
            placeholder="City"
            type="text"
            value={formData.address.city}
            onChange={(e) =>
              setFormData({ ...formData, address: { city: e.target.value } })
            }
          />
          <span className="errorLabel">{errors['city']}</span>
        </Form.Group>
        <div className='buttonWrapper'>
        <LinkContainer to="/">
          <Button variant="outline-danger" size="md">
            Cancel
          </Button>
        </LinkContainer>
        <Button variant="success" type="submit">
          Submit
        </Button>
        </div>
      </Form>
    </div>
  );
};
