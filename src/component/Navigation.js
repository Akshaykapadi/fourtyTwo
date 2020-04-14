import React from 'react';
import {  Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
.navbar { 
  background-color: #222; 
  height: 53px
}
a, .navbar-nav, .navbar-light .nav-link {
  color: #1cbac8;
  &:hover { color: white; }
}

.navbar-brand {
  font-size: 2.4em;
  color: #fff;
  &:hover { color: white; }
  padding:20px;
  text-decoration: none;
  
}


`;

export const NavigationBar = () => (
    <Styles>
      <Navbar expand="lg">
        <Navbar.Brand href="/">FourtyTwo</Navbar.Brand>
        
      </Navbar>
    </Styles>
  )