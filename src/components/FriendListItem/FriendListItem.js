import PropTypes from 'prop-types';

export const FriendListItem = ({ avatar, name, isOnline, id }) => (
  <li className="item" id={id}>
    {isOnline ? (
      <span className="active"></span>
    ) : (<span className="disabled"></span>)}
 
    <img className="avatar" src={avatar} alt="" width="48" />
    <p className="name">{name}</p>
  </li>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
};
