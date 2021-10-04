import s from './FriendItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => (
    <>
    <span className={`${isOnline ? s.active : s.status}`}></span>
    <img className={s.img} src={avatar} alt="" width="48" />
    <p className={s.name}>{name}</p>
    </>
)
