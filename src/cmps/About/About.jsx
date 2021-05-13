import { Component } from 'react'
import Profile from '../../assets/img/Profile.jpg'
import html from '../../assets/img/icons/html.svg'
import css from '../../assets/img/icons/css.svg'
import js from '../../assets/img/icons/js.svg'
import vue from '../../assets/img/icons/vue.svg'
import angular from '../../assets/img/icons/angular.svg'
import node from '../../assets/img/icons/node.svg'
import mongo from '../../assets/img/icons/mongo.svg'
import react from '../../assets/img/icons/react.svg'
import sass from '../../assets/img/icons/sass.svg'
import typescript from '../../assets/img/icons/typescript.svg'

import './About.scss'

export class About extends Component {
    state = {
        imgs: [html, css, sass, js, vue, react, angular, node, mongo, typescript]
    }
    render() {
        const { imgs } = this.state
        return (
            <div id="about">
                <div className="me">
                    <img src={Profile} alt="" />
                    <div>
                        <h2>ABOUT ME</h2>
                        <p>My name is Yoni Bar, I live in Kfar Tavor And im 22 years old.<br /> While i'm not coding you will probably see me playing soccer or drinking a cold beer.<br />A Frontend / Full-Stack Web Developer with experience in writing single-page applications <br /> using the latest WEB technologies (Vue.js,React,Angular,Redux,Node.js,etc..) Graduate of the Coding Academy <br /> - 640 hours of an intentsive coding bootcamp that qualifies Full-Stack developers.</p>
                    </div>
                </div>
                <div className="tech-skills">
                    <h2>SKILLS</h2>
                    <div className="icons-container">
                        {imgs.map((imgSrc, idx) => (
                            <img key={idx} src={imgSrc} alt="" />
                        ))}
                    </div>
                    {/* <div className="summary">
                        <h2>Summary</h2>
                        <p></p>
                    </div> */}
                </div>
            </div>
        )
    }
}
