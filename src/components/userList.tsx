import React, {useEffect} from 'react';
import {UseTypedSelector} from "../hooks/useTypedSelector";
import {useAction} from "../hooks/useAction";

const UserList: React.FC = () => {
  const {users, errors, loading} = UseTypedSelector(state => state.user);
  const {fetchUsers} = useAction()

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (errors) {
    return <div>{errors}</div>;
  }
  return (
    <div>
      {users.map(user => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};

export default UserList;