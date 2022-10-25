import { Profile } from './Profile/Profile';
import user from '../path/to/user.json';

import { Statistics } from './Statistics/Statistics';
import data from '../path/to/data.json';

import { FriendsList } from './FriendList/FriendList';
import friendsItem from '../path/to/friends.json';

import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from '../path/to/transactions.json';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendsList friends={friendsItem} />
      <TransactionHistory items={transactions} />;
    </>
  );
};
