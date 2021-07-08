import React   from 'react';
import RenderProp from '../Renderprop/RenderProp';
import Banner from '../Banner/Banner';


const Page1 = () => {

    return (
        <div>
            <RenderProp>
                {(bannerImg) => <Banner bannerImg={bannerImg}/>}
           </RenderProp>
        </div>
    );

}


export default Page1;