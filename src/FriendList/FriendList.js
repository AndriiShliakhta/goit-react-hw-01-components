import styles from './FriendList.module.css';
import PropTypes from 'prop-types';

export default function FriendList({ friends }) {
  return (
    <ul className={styles.friends}>
      {friends.map(friend => {
        return (
          <li className={styles.item} key={friend.id}>
            <span
              className={styles.status}
              style={{
                backgroundColor: friend.isOnline
                  ? 'rgb(26, 143, 69)'
                  : 'rgb(206, 89, 42)',
              }}
            >
              {friend.isOnline}
            </span>
            <img
              className={styles.avatar}
              src={friend.avatar}
              alt="Аватарка"
              width="48"
            />
            <p className={styles.name}>{friend.name}</p>
          </li>
        );
      })}
    </ul>
  );
}
FriendList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      isOnline: PropTypes.bool,
      avatar: PropTypes.string,
      name: PropTypes.string,
    }),
  ),
};
