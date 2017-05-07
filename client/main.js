import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';

const players = [{
  _id: '1',
  name: 'One',
  score: 99
}, {
  _id: '2',
  name: 'Two',
  score: -1
}, {
  _id: '3',
  name: 'Three',
  score: -12
}];

const renderPlayers = function (playersList) {
  return playersList.map(function (player) {
    return <p key={player._id}>{player.name} has {player.score} points!</p>
  });
};

Meteor.startup(function () {
  let title = 'Score Keep';
  let name = 'Tom';
  let jsx = (
    <div>
      <h1>{title}</h1>
      <p>Hello {name}!</p>
      <p>PP!</p>
      {renderPlayers(players)}
    </div>
  );
  ReactDOM.render(jsx, document.getElementById('app'));
});
