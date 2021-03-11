import React from 'react';
import { useEffect, useState } from 'react';
import Header from '../Header/Header';
import League from '../League/League';


const Home = () => {
  const [leagues, setLeagues] = useState([]);

  useEffect(() => {
    fetch('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
      .then(res => res.json())
      .then(data => setLeagues(data.leagues));
  }, [])

  const leagueList = leagues.slice(0, 15);

  return (
    <div className="container-fluid bg-light">
      <Header></Header>
      {
        leagueList.map(league => <League league={league}></League>)
      }
    </div>
  );
};

export default Home;