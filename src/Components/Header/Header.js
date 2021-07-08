import React from 'react';
import { Navbar,Nav, NavItem,Button} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import ThemeContext from '../context/ThemeContext';

export default class Header extends React.Component{


    render() {
        const { theme, SwithTheme } = this.context;
        const color1 = "#2f3640";
        const color2 = "#485460";
        const color3 = "#dff9fb";
        const color4 = "#c7ecee";

      const  styelBod= theme ==='dark'? {background: `linear-gradient(to top,  ${color1} 0%,${color2} 100%)`}:{background: `linear-gradient(to top,  ${color3} 0%,${color4} 100%)`}

        return (
            <div className="container-fluid" style={styelBod}>
           <div className="container">
             <Navbar>
                <Nav>
                <NavItem>
                    <NavLink to="/context1"  className="nav-link text-info">Context-API-1</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/context2" className="nav-link text-info">Context-API-2</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/context3"  className="nav-link text-info">Context-API-3</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink  to="/context4"  className="nav-link text-info">Context-API-4</NavLink>
                </NavItem>
               </Nav>
               <Button onClick={SwithTheme} size="sm">{theme==='dark'?'Dark':'Light'}</Button>
             </Navbar>
            </div>
            </div>
        );
    }


}


Header.contextType = ThemeContext;