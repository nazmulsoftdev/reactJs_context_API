import React,{useContext} from 'react';
import { Route, Switch,Redirect } from 'react-router-dom';
import Page1 from '../Pages/Page1';
import Page2 from '../Pages/Page2';
import Page3 from '../Pages/Page3';
import Page4 from '../Pages/Page4';
import ThemeContext from '../context/ThemeContext';




const Body = () => {
    const context = useContext(ThemeContext);
    const { theme } = context;
    const color1 = "#2f3640";
    const color2 = "#485460";
    const color3 = "#dff9fb";
    const color4 = "#c7ecee";
    
  const  styelBod= theme ==='dark'? {background: `linear-gradient(to top,  ${color1} 0%,${color2} 100%)`}:{background: `linear-gradient(to top,  ${color3} 0%,${color4} 100%)`}

    return (
        <div className="container-fluid" style={styelBod}>
            <div className="container">
                <Switch>
                    <Route path="/context1" exact render={()=><Page1 />} />
                    <Route path="/context2" exact render={()=><Page2/>}/>
                    <Route path="/context3" exact render={()=><Page3/>}/>
                    <Route path="/context4" exact render={() => <Page4 />} />
                    <Redirect from="/" to="/context1"/>
            </Switch>
           </div>
        </div> 
    );

}


export default Body;

