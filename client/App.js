// import './App.css';
import React from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

const GET_SKATERS_STATS = gql`
  {
    skaters {
      firstName {
        default
      }
      lastName {
        default
      }
      points
      goals
      assists
    }
  }
`;

const Skater = ({ skater: { firstName, lastName, points, assists, goals } }) => (
  <div className="Card">
    <div>
      <h4>
        Name: {firstName.default} {lastName.default}
        <br />
        Points: {points}
        <br />
        Goals: {goals}
        <br />
        Assists: {assists}
      </h4>
    </div>
  </div>
);

function App() {
  const { loading, error, data } = useQuery(GET_SKATERS_STATS);
  console.log(data);

  if (error) return <h1>Something went wrong!</h1>;
  if (loading) return <h1>Loading...</h1>;

  return (
    <main className="App">
      <h2>NHL Stats</h2>

      {data.skaters.map((skater, idx) => (
        <Skater key={idx} skater={skater} />
      ))}
    </main>
  );
}

export default App;
