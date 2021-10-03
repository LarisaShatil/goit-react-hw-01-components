import PropTypes from 'prop-types';
import { FriendListItem } from "../FriendListItem/FriendListItem";

export default function FriendList({ friends}) {
  return (
    <ul className="friend-list">
        {friends.map(item => (
        <li className="item" key={item.id}>
        <FriendListItem
        avatar={item.avatar}
        name={item.name}
        isOnline={item.isOnline}
            id={item.id}
            />
        </li>
        ))}
    </ul>
  );
};

    // 
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool,
    })
  )
};