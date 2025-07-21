import React from 'react'
import { HistoryBackground } from './styledComponents'
import Navbar from '../navbar'
import { RankingTable, RankingTableLabels, Labels } from '../leaderboard/styledComponents'
import { useEffect, useState } from 'react'
import RankElement from '../rankelement'

const Pointshistory = () => {
    const [history , setHistory] = useState([])
    useEffect(() => {
        const fetchHistory = async () => {
            const response = await fetch('http://localhost:5000/history')
            const data = await response.json()
            setHistory(data)
        }
        fetchHistory()
    }, [])

  return (
    <HistoryBackground>
        <Navbar />
        <RankingTable>
          <RankingTableLabels>
            <Labels>Rank</Labels>
            <Labels>Username</Labels>
            <Labels>Points</Labels>
            <Labels>Added Points</Labels>
          </RankingTableLabels>
          {history.map((user, index) => (
            <RankElement key={index} user={user} />
          ))}
        </RankingTable>
    </HistoryBackground>
  )
}

export default Pointshistory