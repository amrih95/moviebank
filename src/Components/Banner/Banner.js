import React, { Component } from 'react';
import './Banner.scss';
// import Logo from '../../Assets/images/y-logo-white.png'
import { Container } from 'react-bootstrap';

class Banner extends Component {
    render() {
        return (
            <div className="banner-wrapper">  
                <div className="banner-bg">
                    <Container>
                        <div className="banner-text">
                            <div className="text-title">QUEEN GAMBIT</div>
                            <div className="text-desc">Young, briliant, obsessed. the chess world never saw her comming - but every move toward glory</div>
                            <div className="banner-btn">
                                <button type="button">More Info</button>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        );
    }
}

export default Banner;
