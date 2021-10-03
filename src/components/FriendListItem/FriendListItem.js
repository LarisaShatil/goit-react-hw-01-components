export const FriendListItem = ({ avatar, name, isOnline }) => (
    <>
      <span className={"status" + (isOnline ? " active" : "")}></span>
    <img className="avatar" src={avatar} alt="" width="48" />
    <p className="name">{name}</p>
    </>
)
