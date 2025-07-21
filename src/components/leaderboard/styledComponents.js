import styled from 'styled-components';

export const AppBackground = styled.div`
    background-image: url('https://i.postimg.cc/sDNhfNvY/Chat-GPT-Image-Jul-21-2025-11-30-25-AM.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh;
    width: 100vw;
  `
export const AnimatedImage = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-top: 120px;
    height: 250px;
    align-items: end;
  `
export const Rank1 = styled.div`
    align-self: start;
    color: #fff;
    font-size: 1.2rem;
    font-weight: 500;
    margin: 8px 40px;
    letter-spacing: 1px;
    text-shadow: 0 1px 8px #6e42a1, 0 1px 2px #000;
    height: 200px;
  `

export const LeaderboardCard = styled.div`
    color: #fff;
    font-size: 1.2rem;
    font-weight: 500;
    margin-top: 8px;
    letter-spacing: 1px;
    text-shadow: 0 1px 8px #6e42a1, 0 1px 2px #000;
    height: 200px;
    align-self: end;
  `
export const Img = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    transition: transform 0.3s ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
  `
export const Names = styled.p`
    color: #fff;
    font-size: 1.2rem;
    font-weight: 500;
    margin-top: 8px;
    letter-spacing: 1px;
    text-align: center;
    text-shadow: 0 1px 8px #6e42a1, 0 1px 2px #000;
  `
export const RankingTableLabels = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    width: 80vw;
    margin: 0 auto;
    margin-top: 20px;
    color: #fff;
    font-size: 1.2rem;
    font-weight: 500;
    letter-spacing: 1px;
    text-shadow: 0 1px 8px #6e42a1, 0 1px 2px #000;
  `
export const Labels = styled.div`
    color: #fff;
    font-size: 1.2rem;
    font-weight: 500;
    letter-spacing: 1px;
    text-shadow: 0 1px 8px #6e42a1, 0 1px 2px #000;
  `
export const RankingTable = styled.div`
    margin: 150px auto 0 auto;
    width: 80vw;
   
  `
export const Rank = styled.p`
    color: #fff;
    font-size: 1.2rem;
    font-weight: 500;
    letter-spacing: 1px;
    text-shadow: 0 1px 8px #6e42a1, 0 1px 2px #000;
    margin-top: 30px;
    text-align: center;

    /* 1st place */
    &.rank-gold {
      color: #ffd700;
      font-size: 1.3rem;
      font-weight: 700;
      text-shadow: 0 2px 12px #ffd70099, 0 1px 2px #000;
    }
    /* 2nd place */
    &.rank-silver {
      color: #bfc1c2;
      font-size: 1.25rem;
      font-weight: 700;
      text-shadow: 0 2px 12px #bfc1c299, 0 1px 2px #000;
    }
    /* 3rd place */
    &.rank-bronze {
      color: #cd7f32;
      font-size: 1.22rem;
      font-weight: 700;
      text-shadow: 0 2px 12px #cd7f3299, 0 1px 2px #000;
    }
  `
export const Points = styled.p`
    color: #fff;
    font-size: 1.2rem;
    font-weight: 500;
    letter-spacing: 1px;
    text-shadow: 0 1px 8px #6e42a1, 0 1px 2px #000;
    text-align: center;

    /* 1st place */
    &.points-gold {
      color: #ffd700;
      font-size: 1.18rem;
      font-weight: 700;
      text-shadow: 0 2px 12px #ffd70099, 0 1px 2px #000;
    }
    /* 2nd place */
    &.points-silver {
      color: #bfc1c2;
      font-size: 1.15rem;
      font-weight: 700;
      text-shadow: 0 2px 12px #bfc1c299, 0 1px 2px #000;
    }
    /* 3rd place */
    &.points-bronze {
      color: #cd7f32;
      font-size: 1.13rem;
      font-weight: 700;
      text-shadow: 0 2px 12px #cd7f3299, 0 1px 2px #000;
    }
  `