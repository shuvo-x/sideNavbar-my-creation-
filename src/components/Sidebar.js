import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';

const Nav = styled.div`
  background: #232F3E;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 1.3rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #15171c;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;
const NavMenu = styled.div`
     display: flex;
    margin-left: 10px;
`;
const NavLink = styled(Link)`
   color: #fff;
   padding: 0px 12px;
   font-size: 13px;
`
const NavContent = styled.div`
   color: white;
   display: flex;
   justify-content: flex-end;
   align-items: center;
   margin-left: auto;

`;
const Content = styled.p`
   font-size: 12px;
   padding: 0px 40px;
   margin: 0px 25px;
`;
const NavBorder = styled.div`
 background: black;
 height: 20px;
`;
const NavInfo = styled.p`
  font-size: 10px;
  color: #fff;
  margin-left: 63px;
  padding: 3px 5px;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
       <NavBorder>
         <NavInfo>+8801937373785</NavInfo>
       </NavBorder>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavIcon to='#'>
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
          <NavMenu>
            <NavLink to=''>Home</NavLink>
            <NavLink to=''>Services</NavLink>
            <NavLink to=''>Pages</NavLink>
            <NavLink to=''>About</NavLink>
            <NavLink to=''>Contact</NavLink>
            <NavLink to=''>Pricing</NavLink>
            <NavLink to=''>Ranges</NavLink>

          </NavMenu>
          <NavContent>
            <Content> Our Response to Covid 19 </Content>
          </NavContent>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to='#'>
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;