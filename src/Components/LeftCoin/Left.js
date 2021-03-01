import React from 'react'
import './Left.css'
import Logo from '../../images/logo.svg'
import CoinImage from '../../images/coins.png'

const LeftCoin = () => {
    return (
        <div className="left-section">
            <div className="pad-32">
            <header>
                <img className="logo" src={Logo} alt="Brand-logo"/>
            </header>
            {/* <div className="page-tab">

            </div> */}
            <div className="new-biz">
                <h1>Create multiple sub-account</h1>
                <p>Organise your business finances easily
                    with multiple accounts. No limits! </p>
                <img src={CoinImage} className="img-fluid" alt="Coin Safe" />
                <footer>
                    <p>&copy; 2020 Prospa Inc</p>
                </footer>
            </div>
            </div>
        </div>
    )
}

export default LeftCoin