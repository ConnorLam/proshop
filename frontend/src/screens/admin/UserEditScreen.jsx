import { Link, useParams } from 'react-router-dom';
import Message from '../../components/Message';
import Loader from '../../components/Loader';
import { useGetUserDetailsQuery, useUpdateUserMutation } from '../../slices/usersApiSlice';
import UserEditForm from '../../components/UserEditForm';

const UserEditScreen = () => {
  const { id: userId } = useParams();

  const { data: user, isLoading, error } = useGetUserDetailsQuery(userId);

  const [updateUser, { isLoading: loadingUpdate }] = useUpdateUserMutation();

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Message variant="danger">{error?.data?.message || error.error || 'Unable to load user'}</Message>;
  }

  return (
    <>
      <Link to="/admin/userlist" className="btn btn-light my-3">
        Go Back
      </Link>

      <UserEditForm key={user._id} user={user} updateUser={updateUser} loadingUpdate={loadingUpdate} />
    </>
  );
};

export default UserEditScreen;
