import PropTypes from 'prop-types';
import { FriendListItem } from "../FriendListItem/FriendListItem";

export default function FriendList({ items}) {
  return (
        <ul className="friend-list">
        {items.map(item => (
        <FriendListItem
        avatar={item.avatar}
        name={item.name}
        isOnline={item.isOnline}
            id={item.id}
            key={item.id}
      />
))}
    </ul>
  );
};

FriendList.propTypes = {
  items: PropTypes.array
};