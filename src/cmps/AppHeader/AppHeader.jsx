// import { Component } from 'react'
import './AppHeader.scss'
import $ from 'jquery';
import { Fade as Hamburger } from 'hamburger-react'
import { useEffect, useState } from 'react'

export function AppHeader() {
    const [isOpen, setOpen] = useState(false)
    // let [isMobile, setMobile] = useState(false)
    useEffect(() => {
        // if (window.screen.width < 800) {
        //     setMobile(isMobile = !isMobile)
        // }
        $('.nav-item').click(function () {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
        });
        return () => {
        }
    }, [])
    function goTo(id) {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(`#${id}`).offset().top
        }, 1000);
    }
    return (
        <section className="app-header">
            <h2 onClick={() => goTo('hero')} >Yoni Bar</h2>
            {/* <nav className={(isMobile && isOpen) ? 'open' : ''}> */}
            <nav className={isOpen ? 'open' : ''}>
                <a onClick={() => goTo('contact')} className="nav-item">CONTACT ME</a>
                <a onClick={() => goTo('projects')} className="nav-item">PROJECTS</a>
                <a onClick={() => goTo('about')} className="nav-item">ABOUT</a>
            </nav>
            <Hamburger toggled={isOpen} toggle={setOpen}></Hamburger>
        </section>)
}

