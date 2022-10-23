import css from './FriendList.module.css';
import { FriendsListItem } from '../FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      <FriendsListItem friends={friends} />
    </ul>
  );
};

