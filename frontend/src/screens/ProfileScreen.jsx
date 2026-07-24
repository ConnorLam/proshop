import { useSelector } from 'react-redux';

const ProfileScreen = () => {
  const user = useSelector((state) => state.auth);
  console.log(user);
  const { userInfo } = user;

  return <div>{userInfo.name}</div>;
};

export default ProfileScreen;
