import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch } from 'react-redux';
import { addUser } from '../store/actions/users';
import { useNavigate   } from 'react-router-dom';

export const NewUser = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    address: {
      city: '',
    },
  });

  const navigate  = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser(formData));
    navigate("/");
  };

  const dispatch = useDispatch();

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
