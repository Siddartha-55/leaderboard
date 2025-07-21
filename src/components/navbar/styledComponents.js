import styled, { css } from 'styled-components';

export const NavbarContainer = styled.nav`
  width: 100vw;
  height: 70px;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  /* Removed box-shadow for full transparency */
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const Logo = styled.img`
  height: 44px;
  width: 44px;
  border-radius: 12px;
  background: #222a;
  box-shadow: 0 0 8px #6e42a1aa;
`;

export const NavOptions = styled.ul`
  display: flex;
  gap: 48px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const NavOption = styled.li`
  color: #fff;
  font-size: 1.15rem;
  font-weight: 500;
  letter-spacing: 1px;
  cursor: pointer;
  position: relative;
  transition: color 0.2s;
  &:hover {
    color: #fff;
    text-shadow: 0 0 8px #a259f7cc, 0 0 2px #000a;
  }
  &::after {
    content: '';
    display: block;
    margin: 0 auto;
    width: 0%;
    height: 2px;
    background: linear-gradient(90deg, #a259f7 0%, #6e42a1 100%);
    border-radius: 2px;
    box-shadow: 0 0 8px #a259f788;
    transition: width 0.3s;
  }
  &:hover::after {
    width: 100%;
  }
`;

export const Profile = styled.img`
  height: 44px;
  width: 44px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #6e42a1;
  box-shadow: 0 0 12px #a259f7aa;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(10, 14, 34, 0.75);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalWindow = styled.div`
  background: linear-gradient(135deg, #1a1740 60%, #2d1a4d 100%);
  border-radius: 18px;
  /* No box-shadow for a cleaner look */
  padding: 36px 32px 28px 32px;
  min-width: 340px;
  min-height: 220px;
  color: #fff;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
  transition: color 0.2s;
  &:hover {
    color: #a259f7;
  }
`;

export const UserList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 40vw;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const UserListItem = styled.li`
  color: #fff;
  width: 280px;
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: 1px;
  text-shadow: 0 1px 8px #6e42a1, 0 1px 2px #000;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 0;
  border-bottom: 1px solid #23243a;
  font-size: 1.1rem;
  &:hover {
    cursor: pointer;
    background: #23243a;
    border-radius: 10px;
  }
`;
export const BlurWrapper = styled.div`
  ${({ blur }) => blur && css`
    filter: blur(8px) brightness(0.8);
    transition: filter 0.3s;
    pointer-events: none;
    user-select: none;
  `}
`;