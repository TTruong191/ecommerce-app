import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Nav from './Nav';

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 5rem;
  }
`;

const Header = () => {
    return (
        <MainHeader >
            <NavLink to="/">
                <img style={{ width: "115px", height: "100px" }} src="./images/logo.png " alt="my logo img" />
            </NavLink>
            <Nav />
        </MainHeader>
    );
}

export default Header;
