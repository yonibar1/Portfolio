import { Component } from 'react'
import './AppHeader.scss'
import $ from 'jquery';
import { Fade as Hamburger } from 'hamburger-react'
import { useEffect } from 'react'

export class AppHeader extends Component {

     // useEffect(() => {
  //   function handleScroll(event) {
  //     var clientRect = event.srcElement.body.getBoundingClientRect();
  //     var clientY = clientRect.top;
  //     console.log(clientY, 'ITEM TS');
  //   }
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   }
  // }, [])
    componentDidMount() {
        $('.nav-item').click(function () {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
        });
    }
    goTo(id) {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(`#${id}`).offset().top
        }, 1000);
    }
    do(){
        console.log('doing');
    }
    render() {
        return (
            <section className="app-header">
                <h2 onClick={() => this.goTo('hero')} >Yoni Bar</h2>
                <Hamburger onClick={()=>this.do()}></Hamburger>
                <nav>
                    <a onClick={() => this.goTo('contact')} className="nav-item">CONTACT ME</a>
                    <a onClick={() => this.goTo('projects')} className="nav-item">PROJECTS</a>
                    <a onClick={() => this.goTo('about')} className="nav-item">ABOUT</a>
                </nav>
            </section>)
    }
}

