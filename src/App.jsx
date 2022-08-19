import React from 'react';
import Success from './components/Success.jsx';
import Users from './components/Users';
import './styles.scss';

// список пользователей: https://reqres.in/api/users

export default function App() {
  const [users, setUsers] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);
  const [searchValue, setSearchValue] = React.useState('');

  React.useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then((res) => res.json())
      .then((json) => setUsers(json.data))
      .catch((err) => {
        console.warn(err);
        alert('данные с сервера не получены');
      })
      .finally(() => setLoading(false));
  }, []);

  const onChangeSearchValue = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  return (
    <div className="App">
      <Users
        items={users}
        isLoading={isLoading}
        searchValue={searchValue}
        onChangeSearchValue={onChangeSearchValue}
      />
      {/* <Success /> */}
    </div>
  );
}
