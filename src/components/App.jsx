// App.jsx

import React from 'react';
import { Profile } from './Profile/Profile';
import user from '../data/user.json';
import Statistics from './Statistics/Statistics'; 
import statisticalData from '../data/statistical-data.json';
import FriendList from './FriendList/FriendList';
import friends from '../data/friends.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />

    </div>
  );
};
