import React from 'react';
import Success from './components/Success.jsx';
import Users from './components/Users';
import './styles.scss';

export default function App() {
  const [users, setUsers] = React.useState([]);
  const [invites, setInvites] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);
  const [success, setSuccess] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');

  React.useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then((res) => res.json())
      .then((json) => setUsers(json.data))
      .catch((err) => {
        console.warn(err);
        alert('Сервер не отвечает');
      })
      .finally(() => setLoading(false));
  }, []);

  const onChangeSearchValue = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  const onClickInvite = (id) => {
    if (invites.includes(id)) {
      setInvites((prev) => prev.filter((_id) => _id !== id));
    }
    setInvites((prev) => [...prev, id]);
  };

  const onClickSentInvites = () => {
    setSuccess(true);
  };

  return (
    <div className="App">
      {success ? (
        <Success count={invites.length} />
      ) : (
        <Users
          items={users}
          isLoading={isLoading}
          searchValue={searchValue}
          onChangeSearchValue={onChangeSearchValue}
          invites={invites}
          onClickInvite={onClickInvite}
          onClickSentInvites={onClickSentInvites}
        />
      )}
    </div>
  );
}
