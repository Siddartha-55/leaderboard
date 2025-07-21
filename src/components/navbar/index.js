import React, { useState } from 'react';
import logo from '../../logo.svg';
import { NavbarContainer, Logo, NavOptions, NavOption, Profile, BlurWrapper, ModalOverlay, ModalWindow, CloseButton, UserList, UserListItem } from './styledComponents';
import { UserId, UserDetails, Img } from '../rankelement/styledComponents';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Navbar = (props) => {
    const location = useLocation();
    console.log(location.pathname)
    const { allUsers, updatepoints } = props;
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const generatePoints = (id) => {
    const points = Math.floor(Math.random() * 10) + 1;
    updatepoints(id, points);
    setShowModal(false);
    alert(`${points} points generated for ${allUsers.find(user => user._id === id).name}`);
  }

  return (
    <>
      <BlurWrapper blur={showModal}>
        <NavbarContainer>
          <Logo src={logo} alt="Logo" />
          <NavOptions>
            <NavOption onClick={() => navigate('/')}>Leaderboard</NavOption>
            {location.pathname === '/' ? (
              <>
                <NavOption onClick={() => setShowModal(true)}>Claim Points</NavOption>
                <NavOption onClick={() => navigate('/pointshistory')}>Point History</NavOption>
              </>
            ): (
                <NavOption onClick={() => navigate('/pointshistory')}>Point History</NavOption>
            )}
          </NavOptions>
          <Profile src="https://i.postimg.cc/tRY53f8c/Itachi-Icon-icon-design-pfp-aesthetic-purpletheme.jpg" alt="Profile" />
        </NavbarContainer>
      </BlurWrapper>
      {showModal && (
        <ModalOverlay>
          <ModalWindow>
            <CloseButton onClick={() => setShowModal(false)}>&times;</CloseButton>
            <h2>Select a user</h2>
            <UserList>
              {allUsers.map((user, idx) => (
                <UserListItem key={idx} onClick={() => generatePoints(user._id)} >
                        <Img src={user.profilePic} />
                        <UserDetails>
                            <p>{user.name}</p>
                            <UserId>@{user.userId}</UserId>
                        </UserDetails>
                </UserListItem>
              ))}
            </UserList>
          </ModalWindow>
        </ModalOverlay>
      )}
    </>
  );
};

export default Navbar;