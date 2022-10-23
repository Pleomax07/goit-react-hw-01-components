import { Profile } from './Profile/Profile';
import user from '../path/to/user.json';

import { Statistics } from './Statistics/Statistics';
import data from '../path/to/data.json';

import { FriendList } from './FriendList/FriendList';
import friendsItem from '../path/to/friends.json';

import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from '../path/to/transactions.json';

export const App = () => {
  return (
    <>
      <Profile
        key={user.username}
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friendsItem} />
      <TransactionHistory items={transactions} />;
    </>
  );
};
