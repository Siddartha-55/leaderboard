import React, { useState, useEffect } from 'react';
import Navbar from '../navbar';
import { AppBackground, AnimatedImage, Rank1, LeaderboardCard, Img, Names, RankingTableLabels, Labels, RankingTable, Rank, Points } from './styledComponents';
import RankElement from '../rankelement';

const Leaderboard = () => {
  const [allUsers, setAllUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('https://leaderboard-backend-vbaw.onrender.com/')
      const data = await response.json()
      setAllUsers(data)
    }
    fetchUsers()
  }, []);

  const updatepoints = async (id, points) => {
    let pointhistory = {}
    const updatedUsers = allUsers.map(user => {
      if (user._id === id) {
          pointhistory = { ...user, points: user.points + points, addedPoints: points };
          return { ...user, points: user.points + points }
      }
      return user;
    });
    updatedUsers.sort((a, b) => b.points - a.points);
    const rankedUsers = updatedUsers.map((user, index) => ({
      ...user,
      rank: index + 1
    }));
    setAllUsers(rankedUsers);
    console.log(pointhistory)
    const historyoptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(pointhistory)
    }
    await fetch('https://leaderboard-backend-vbaw.onrender.com/addhistory', historyoptions)
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(rankedUsers)
    }
    const response = await fetch('https://leaderboard-backend-vbaw.onrender.com/updatepoints', options)
    const data = await response.json()
    console.log(data)
  };

  return (
    allUsers.length > 0 ? (
      <AppBackground>
        <Navbar allUsers={allUsers} updatepoints={updatepoints} />
        <AnimatedImage>
          <LeaderboardCard>
            <Img src={allUsers[1].profilePic} />
            <Names>{allUsers[1].name}</Names>
            <Rank className='rank-silver'>Rank: {allUsers[1].rank}</Rank>
            <Points className='points-silver'>Points: {allUsers[1].points}</Points>
          </LeaderboardCard>
          <Rank1>
            <Img src={allUsers[0].profilePic} />
            <Names>{allUsers[0].name}</Names>
            <Rank className='rank-gold'>Rank: {allUsers[0].rank}</Rank>
            <Points className='points-gold'>Points: {allUsers[0].points}</Points>
          </Rank1>
          <LeaderboardCard>
            <Img src={allUsers[2].profilePic} />
            <Names>{allUsers[2].name}</Names>
            <Rank className='rank-bronze'>Rank: {allUsers[2].rank}</Rank>
            <Points className='points-bronze'>Points: {allUsers[2].points}</Points>
          </LeaderboardCard>
        </AnimatedImage>
        <RankingTable>
          <RankingTableLabels>
            <Labels>Rank</Labels>
            <Labels>Username</Labels>
            <Labels>Points</Labels>
          </RankingTableLabels>
          {allUsers.map((user, index) => (
            <RankElement key={index} user={user} />
          ))}
        </RankingTable>
      </AppBackground>
    ) : (
      <AppBackground>
        <Navbar />
        <div>Loading...</div>
      </AppBackground>
    )
  );
};

export default Leaderboard;