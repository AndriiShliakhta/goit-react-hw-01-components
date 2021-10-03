import React from 'react';
import styles from './FriendList.module.css';
import PropTypes from 'prop-types';

const FriendListItem = ({ id, isOnline, avatar, name }) => {
  return (
    <li className={styles.item} key={id}>
      <span
        className={styles.status}
        style={{
          backgroundColor: isOnline ? 'rgb(26, 143, 69)' : 'rgb(206, 89, 42)',
        }}
      >
        {isOnline}
      </span>
      <img className={styles.avatar} src={avatar} alt="Аватарка" width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      isOnline: PropTypes.bool,
      avatar: PropTypes.string,
      name: PropTypes.string,
    }),
  ),
};

export default FriendListItem;
