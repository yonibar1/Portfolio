import { Component } from 'react'
import $ from 'jquery';

import './Greet.scss'

export class Greet extends Component {
    state = {
        btnClass: ''
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ btnClass: 'show' })
        }, 2000)
    }

    goTo(id) {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(`#${id}`).offset().top
        }, 1000);
    }
    render() {
        return (
            <div id="hero">
                <div className="blur-screen">
                    <div className="greet">
                        <h1>Yoni Bar</h1>
                        <p>Full Stack Web Developer</p>
                        <button id="readmore-btn" className={this.state.btnClass} onClick={() => this.goTo('about')}>Read More</button>
                    </div>
                </div>
            </div>
        )
    }
}
