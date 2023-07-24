import api from '../api';
import {useState, useEffect, useCallback} from 'react';
import {useNavigate} from 'react-router-dom';
import {useTableHeaders} from '../components/Users/UsersTable/hooks/useTableHeaders';
import UsersTable from '../components/Users/UsersTable';

const Users = () => {
  const navigate = useNavigate();
  const {headers} = useTableHeaders();
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const handleRowClick = (userId: number) => {
    navigate(`/posts/${userId}`);
  };

  const getUsers = useCallback(async () => {
    try {
      setLoading(true);

      const {data} = await api.get('/users');
      setUsers(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <div className="p-10 flex flex-col gap-y-20">
      <h2 className="text-blue-950 text-3xl font-semibold">Users Page</h2>

      <UsersTable
        headers={headers}
        items={users}
        loading={loading}
        className="w-fit"
        onRowClick={handleRowClick}
      />
    </div>
  );
};

export default Users;
