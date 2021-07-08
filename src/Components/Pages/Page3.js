import React,{useContext} from 'react';
import ThemeContext from '../context/ThemeContext';
import Carditem2 from '../Carditem/Carditem2';

const Page3 = () => {
    
    const context = useContext(ThemeContext);
    const { userProfile } = context;
    return (
        <div className="Carditem-wrap">
            <Carditem2 userProfile={userProfile}/>
        </div>
    );

}


export default Page3;