import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export const FriendsListItem = ({ friends }) => {
  return friends.map(({ 
    avatar,
    name, 
    isOnline, 
    id 
  }) => {
    return (
      <li className={css.item} key={id}>
        <span className={isOnline ? css.online : css.ofline}></span>
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
      </li>
    );
  });
};

FriendsListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
