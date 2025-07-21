import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0% { background-position: -400px 0; }
  100% { background-position: 400px 0; }
`;

export const RankElementContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: 1px;
  text-shadow: 0 1px 8px #6e42a1, 0 1px 2px #000;
  background: rgba(10, 14, 34, 0.88);
  padding: 20px;
  border-radius: 14px;
  width: 80vw;
  margin: 10px auto;
  border: 1.5px solid rgba(98, 66, 161, 0.25);
  box-shadow: 0 0 16px 2px rgba(98, 66, 161, 0.08) inset;
  position: relative;
  overflow: hidden;
  transition: background 0.3s, border 0.3s, box-shadow 0.3s;
  
  &:hover {
    background: linear-gradient(90deg, rgba(10,14,34,0.92) 60%, rgba(98,66,161,0.13) 100%);
    border: 1.5px solid #6e42a1;
    box-shadow: 0 0 32px 4px rgba(98, 66, 161, 0.18) inset, 0 2px 12px 0 rgba(98,66,161,0.12);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: linear-gradient(120deg, rgba(98,66,161,0.08) 0%, rgba(162,89,247,0.10) 100%);
    z-index: 0;
    pointer-events: none;
    border-radius: 14px;
    box-shadow: 0 0 32px 8px rgba(98,66,161,0.10) inset;
    opacity: 0.7;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: linear-gradient(90deg, rgba(98,66,161,0.10) 0%, rgba(162,89,247,0.10) 40%, rgba(98,66,161,0.10) 100%);
    background-size: 400px 100%;
    opacity: 0;
    z-index: 1;
    pointer-events: none;
    border-radius: 14px;
    transition: opacity 0.3s;
  }
  &:hover::after {
    opacity: 1;
    animation: ${shimmer} 1.6s linear infinite;
  }
  
  > * {
    position: relative;
    z-index: 2;
  }
`;

export const Elements = styled.div`
  color: #fff;
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: 1px;
  text-shadow: 0 1px 8px #6e42a1, 0 1px 2px #000;
  display: flex;
  align-items: center;
  gap: 10px;
  width: 220px;
`;
export const Text = styled.p`
color: #fff;
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: 1px;
  text-shadow: 0 1px 8px #6e42a1, 0 1px 2px #000;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Img = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

export const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserId = styled.p`
  color: #fff;
  font-size: 0.75rem;
  font-weight: 200;
  letter-spacing: 1px;
  text-shadow: 0 1px 8px #6e42a1, 0 1px 2px #000;
`;
