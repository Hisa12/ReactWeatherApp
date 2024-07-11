import React,{useState} from "react";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import {Navbar, Nav} from 'react-bootstrap'
import './NavBar.css';

export default function NavBar(){
    const [expanded, setExpanded] = useState(false)

  return (
        <Navbar expanded={expanded} sticky="top" expand="lg" collapseOnSelect >

          <div class="navbar-brand">
            <h3>
              <Nav.Link onClick={() => setExpanded(false)}><Link style={{ color: 'Black', margin: '10px', textDecoration:'none'}} 
              to="/">W&W</Link></Nav.Link>
            </h3>

          </div>

         <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav collapseOnSelect>
              <ul class="navbar-nav"  style={{padding: '15px'}}>
                <li class="nav-item">
                  <Nav.Link onClick={() => setExpanded(false)}><Link style={{ textDecoration: 'none', color:'black', marginRight:"15px"}} to="/">Current Weather in BNE</Link></Nav.Link>
                </li>
                  <li class="nav-item">
                 <Nav.Link onClick={() => setExpanded(false)}><Link style={{ textDecoration: 'none', color:'black', marginRight:"15px"}} to="/dailyweather">Daily Forecast in BNE</Link></Nav.Link>
                </li>
                <li class="nav-item">
                  <Nav.Link onClick={() => setExpanded(false)}><Link style={{ textDecoration: 'none', color:'black', marginRight:"15px"}}  to="/searchloc">Search City</Link></Nav.Link>
                </li>
                <li class="nav-item">
                  <Nav.Link onClick={() => setExpanded(false)}><Link style={{ textDecoration: 'none', color:'black', marginRight:"15px"}} to="/login">Login</Link></Nav.Link>
                </li>
              </ul>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
              


  )

} 