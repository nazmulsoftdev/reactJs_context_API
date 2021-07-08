import React from 'react';

const Banner = ({bannerImg,TitleText}) => {
    
    return (
        <div className="banner-wrap">
            <img src={bannerImg} alt="..." width="100%" height="400px" />
            <div>
              <h4 className="banner-Text">{TitleText}</h4>
            </div>
        </div>
    );

}


export default Banner