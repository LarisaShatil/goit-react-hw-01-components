import PropTypes from 'prop-types';
import s from './Profile.module.css';
import defaultImage from '../../img/avatar.png';

export default function Profile({ name, tag, location, avatar=defaultImage, stats }) {
  return (
  <div className={s.container}>
  <div className={s.card}>
    <img
      src={avatar}
      alt={name}
      className={s.avatar}
    />
    <p className={s.name}>{name}</p>
        <p className={s.tag}>@{ tag}</p>
        <p className={s.location}>{location}</p>
    <ul className={s.list}>
    <li>
      <span className={s.label}>Followers</span>
          <span className={s.quantity}>{ stats.followers}</span>
    </li>
    <li>
      <span className={s.label}>Views</span>
      <span className={s.quantity}>{ stats.views}</span>
    </li>
    <li>
      <span className={s.label}>Likes</span>
          <span className={s.quantity}>{stats.likes}</span>
    </li>
  </ul>
  </div>


</div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar:PropTypes.string,
    stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
}