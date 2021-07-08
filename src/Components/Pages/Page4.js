import React from 'react';
import ThemeContext from '../context/ThemeContext';
import Carditem3 from '../Carditem/Carditem3';
export default class Page4 extends React.Component {
    
    
    render() {

        const { userProfile} = this.context;

        return (
            <div className="Carditem-wrap">
                <Carditem3 userProfile={userProfile}/>
            </div>
        );
    }



}


 Page4.contextType = ThemeContext