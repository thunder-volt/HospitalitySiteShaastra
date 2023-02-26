import React from 'react'
import "../styles/home.css"
import { useNavigate } from 'react-router-dom';
import img from '../assets/logo.png'
const Home = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className='body-home'>

                <header className='header-home'>

                    <nav className="navbar">
                        <div className="play-button">
                            <a href="https://shaastra.org/" target="_blank"> <img className="" src={img} /></a>

                        </div>
                        <ul className="menu">
                            <li><a href="/">Home</a></li>
                            <li><a href="/faq">FAQ</a></li>
                            <li><a href="/howtoreach">How to Reach?</a></li>
                            <li><a href="/general">General Information</a></li>
                        </ul>
                        <div className="buttons">
                            {/* <input type="button" value="Login" onClick={() => {
                                navigate("/login")
                            }} /> */}
                            <input type="button" value="Register" onClick={() => {
                                navigate('/signup')
                            }} />
                        </div>
                    </nav>
                    <div className="text-content">
                        <div className='acc-intro'><h2>SHAASTRA 2023<br />Spectral Splendors</h2>
                            <p>When you come to Shaastra, we will ensure that you have all the fun you want and leave us to take care of the rest. We at the Hospitality (known affectionately as ‘Hospi’) team shall leave no stone unturned to ensure that your stay with us is enjoyable and comfortable. In order to enable us to assist you in the best possible manner, we would request you to register your college contingent at the Hospitality web portal as early as possible. We can help you better if you intimate us about your plans in advance, so that appropriate arrangements can be made. We look forward to having a great time with you!
                                For any queries and on the spot registrations during the fest, approach the Hospitality Desk in the fest arena.
                                <br />
                                <b>
                                    Feel free to contact us at: <br />
                                    Anuj(Hospitality head)- +91 79094 67433
                                    <br />
                                    Parth(Finance Manager)-  9307371504
                                </b>

                            </p></div>
                    </div>
                </header>
            </div>
        </>
    )
}

export default Home;