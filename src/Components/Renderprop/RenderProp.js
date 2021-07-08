import React from 'react';

export default class RenderProp extends React.Component{


    state = {
        bannerImg: 'https://cdn.pixabay.com/photo/2019/10/03/12/12/javascript-4523100_960_720.jpg'
    }


    render() {
        const { children } = this.props;
        const { bannerImg } = this.state;
        return children(bannerImg)
    }


}