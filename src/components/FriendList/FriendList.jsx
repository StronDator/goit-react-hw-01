import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FrienList.module.css";

export default FriendList;

function FriendList({ friends }) {
  return (
    <ul className={css.list}>
      {friends.map((el) => (
        <li key={el.id}>
          <FriendListItem
            avatar={el.avatar}
            name={el.name}
            isOnline={el.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}
