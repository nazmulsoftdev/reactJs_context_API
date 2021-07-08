import React, { useContext} from 'react';
import Carditem1 from '../Carditem/Carditem1';
import ThemeContext from '../context/ThemeContext';

const Page2 = () => {
    
    const context = useContext(ThemeContext);
    const {userProfile} = context;

    return (
        <div className="Carditem-wrap">
            <Carditem1 userProfile={userProfile}/>
        </div>
    );

}


export default Page2;