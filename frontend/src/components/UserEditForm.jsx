import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import Loader from './Loader';
import FormContainer from './FormContainer';

const UserEditForm = ({ user, updateUser, loadingUpdate }) => {
  const navigate = useNavigate();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [isAdmin, setIsAdmin] = useState(user.isAdmin);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      await updateUser({
        userId: user._id,
        name,
        email,
        isAdmin,
      }).unwrap();

      toast.success('User updated successfully');
      navigate('/admin/userlist');
    } catch (err) {
      toast.error(err?.data?.message || err.error || 'Unable to update user');
    }
  };

  return (
    <FormContainer>
      <h1>Edit User</h1>

      {loadingUpdate && <Loader />}

      <Form onSubmit={submitHandler}>
        <Form.Group controlId="name" className="my-2">
          <Form.Label>Name</Form.Label>

          <Form.Control type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="email" className="my-2">
          <Form.Label>Email</Form.Label>

          <Form.Control
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="isAdmin" className="my-2">
          <Form.Check
            type="checkbox"
            label="Is Admin"
            checked={isAdmin}
            onChange={(e) => setIsAdmin(e.target.checked)}
          />
        </Form.Group>

        <Button type="submit" variant="primary" className="my-2" disabled={loadingUpdate}>
          Update
        </Button>
      </Form>
    </FormContainer>
  );
};

export default UserEditForm;
