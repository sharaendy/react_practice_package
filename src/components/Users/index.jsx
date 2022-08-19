import React from 'react';
import Skeleton from './Skeleton';
import User from './User';

export default function Users({
  items,
  isLoading,
  searchValue,
  onChangeSearchValue,
  invites,
  onClickInvite,
  onClickSentInvites,
}) {
  return (
    <>
      <div className="search">
        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
        </svg>
        <input
          value={searchValue}
          onChange={onChangeSearchValue}
          type="text"
          placeholder="Найти пользователя..."
        />
      </div>
      {isLoading ? (
        <div className="skeleton-list">
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      ) : (
        <ul className="users-list">
          {items
            .filter(({ first_name, last_name, email }) => {
              const fullName = `${first_name} ${last_name}`.toLowerCase();
              const entering = searchValue.toLowerCase();
              if (fullName.includes(entering) || email.includes(entering)) {
                return true;
              }
              return false;
            })
            .map((obj) => {
              const {
                id, email, first_name, last_name, avatar,
              } = obj;
              return (
                <User
                  key={id}
                  id={id}
                  isInvited={invites.includes(id)}
                  onClickInvite={onClickInvite}
                  email={email}
                  first_name={first_name}
                  last_name={last_name}
                  avatar={avatar}
                />
              );
            })}
        </ul>
      )}
      {invites.length > 0 && (
        <button
          onClick={onClickSentInvites}
          className="send-invite-btn"
          type="button"
        >
          Отправить приглашение
        </button>
      )}
    </>
  );
}
