import React from 'react';
import styles from './Profile.module.css';
import PropTypes from 'prop-types';

export default function Profile(props) {
  return (
    <div className={styles.profile} id={props.tag}>
      <div className={styles.description}>
        <img
          src={props.avatar}
          alt="Аватар пользователя"
          className={styles.avatar}
        />
        <p className={[styles.name, styles.descriptionElem].join(' ')}>
          {props.name}
        </p>
        <p className={[styles.pale, styles.descriptionElem].join(' ')}>
          @{props.tag}
        </p>
        <p className={[styles.pale, styles.descriptionElem].join(' ')}>
          {props.location}
        </p>
      </div>
      <ul className={styles.stats}>
        <li>
          <span className={[styles.label, styles.pale].join(' ')}>
            Followers
          </span>
          <span className={styles.quantity}> {props.stats.followers}</span>
        </li>
        <li>
          <span className={[styles.label, styles.pale].join(' ')}>Views</span>
          <span className={styles.quantity}> {props.stats.views}</span>
        </li>
        <li>
          <span className={[styles.label, styles.pale].join(' ')}>Likes</span>
          <span className={styles.quantity}> {props.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  tag: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
