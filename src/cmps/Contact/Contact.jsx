
import { Component } from 'react'
// import facebook from '../../assets/img/icons/facebook.svg'
import facebook from '../../assets/img/icons/facebook.png'
import linkedin from '../../assets/img/icons/linkedin.svg'
import github from '../../assets/img/icons/github.svg'

import './Contact.scss'
export class Contact extends Component {
    render() {
        return (
            <div id="contact">
                <h1>Contact Me</h1>
                <div className="contact-content">
                    <div className="my-details">
                        <h2>Yoni Bar</h2>
                        <h4>FullStack Developer</h4>
                        <p>+972-544602705</p>
                        <a href="mailto:yonibar1999@gmail.com">yonibar1999@gmail.com</a>
                        <div className="icons-container">
                            <img onClick={() => window.open("https://www.facebook.com/yonatan.bar.9/")} className='facebook' src={facebook} alt="" />
                            <img onClick={() => window.open("https://github.com/yonibar1")} src={github} alt="" />
                            <img onClick={() => window.open("https://www.linkedin.com/in/yoni-bar-5224b5203/")} src={linkedin} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
