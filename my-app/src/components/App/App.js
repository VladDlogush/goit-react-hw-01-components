import React from 'react';
import './App.css';
import pricingPlanItems from '../../pricing-plan.json';
import transactions from '../../transactions.json';
import Profile from '../Profile/Profile';
import Stats from '../Stats/Stats';
import PricingPlan from '../PricingPlan/PricingPlan';
import TransactionHistory from '../TransactionHistory/TransactionHistory';

const user = {
  name: 'Jacques Gluke',
  tag: '@jgluke',
  location: 'Ocho Rios, Jamaica',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const stats = [
  { id: 'id-1', label: '.docx', percentage: 22 },
  { id: 'id-2', label: '.pdf', percentage: 4 },
  { id: 'id-3', label: '.mp3', percentage: 17 },
  { id: 'id-4', label: '.psd', percentage: 47 },
  { id: 'id-5', label: '.pdf', percentage: 10 },
];

function randomColor() {
  const allowed = 'ABCDEF0123456789';
  let S = '#';

  while (S.length < 7) {
    S += allowed.charAt(Math.floor(Math.random() * 16 + 1));
  }
  return S;
}

const color = `${randomColor()}`;

const App = () => (
  <div className="App">
    <Profile user={user} />
    <Stats title="Upload stats" stats={stats} color={color} />
    <PricingPlan items={pricingPlanItems} />,
    <TransactionHistory items={transactions} />
  </div>
);

export default App;
