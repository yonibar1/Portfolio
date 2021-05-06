
import { Component } from 'react'
import { TextField } from '@material-ui/core';
// import facebook from '../../assets/img/icons/facebook.svg'
import facebook from '../../assets/img/icons/facebook.png'
import linkedin from '../../assets/img/icons/linkedin.svg'
import github from '../../assets/img/icons/github.svg'
import emailjs from 'emailjs-com'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './Contact.scss'
export class Contact extends Component {
    state={
            name:'',
            email:'',
            msg:'',
            isValidMail:false
            
    }
    handleChange = ({ target }) => {
        const field = target.name
        const value = target.value
        console.log(field,'Field');
        console.log(value,'Value');
        this.setState({ [field]: value })
    }
    sendMessage(ev){
        const {msg,email,name} = this.state
        ev.preventDefault()
        console.log(ev.target);
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if(!pattern.test(this.state.email)){
                return toast.dark('Please enter a valid email')
            }
            emailjs.sendForm('gmail', 'template_bk4xmvk', ev.target, 'user_Jed2fuZ8RwifQT1Lp4qq6')
            .then((result) => {
                console.log(result.text);
                toast.success('Mail sent!')
            }, (error) => {
                toast.error('Cannot send mail, try again later!')
                console.log(error.text);
            });
            ev.target.reset()
    }
    render() {
        const {name,email,msg} = this.state
        return (
            <div id="contact">
                <h1>send me a message</h1>
                <div className="contact-content">
                    <div className="my-details">
                        <h2>Yoni Bar</h2>
                        <h4>FullStack Developer</h4>
                        <p>+972-544602705</p>
                        <a href="mailto:yonibar1999@gmail.com">yonibar1999@gmail.com</a>
                        <div className="icons-container">
                        <img onClick={()=>window.open("https://www.facebook.com/yonatan.bar.9/")} className='facebook' src={facebook} alt=""/>
                        <img onClick={()=>window.open("https://github.com/yonibar1")} src={github} alt=""/>
                        <img onClick={()=>window.open("https://www.linkedin.com/in/yoni-bar-5224b5203/")} src={linkedin} alt=""/>
                        </div>
                    </div>
                    {/* <form  action="mailto:yonibar1999@gmail.com" method="post" encType="multipart/form-data"> onSubmit={(ev)=> this.sendMessage(ev)}> */}
                    <form onSubmit={(ev)=> this.sendMessage(ev)}>
                        <TextField name='name' value={name} onChange={this.handleChange} required id="outlined-basic" color="primary" label="Your Name" variant="outlined" />
                        <TextField name='email' value={email} onChange={this.handleChange} required id="outlined-basic" color="primary" label="Your Email" variant="outlined" />
                        <TextField name='msg'  value={msg} onChange={this.handleChange} required id="outlined-basic" color="primary" label="Your Message" variant="outlined" />
                        <button>SEND</button>
                        <ToastContainer />
                    </form>
                </div>
            </div>
        )
    }
}
