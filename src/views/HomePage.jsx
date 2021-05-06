import { Component } from 'react'
import { About } from '../cmps/About'
import { Greet } from '../cmps/Greet'
import { Contact } from '../cmps/Contact'
import { ProjectList } from '../cmps/ProjectList'
// import $ from 'jquery';
import '../assets/styles/cmps/home-page.scss'
import projectService from '../services/project.service'
export class HomePage extends Component {
    state = {
        aboutMounted: false,
        projects: null
    }
    async componentDidMount() {
        const projects = await projectService.getProjects()
        this.setState({ projects })
        // window.addEventListener('scroll', (ev) => this.handleScroll(ev));
    }
    componentWillUnmount() {
        // window.removeEventListener('scroll', this.handleScroll);
    }
    handleScroll(event) {
        var clientRect = event.srcElement.body.getBoundingClientRect();
        var clientY = clientRect.top;
        console.log(clientY);
        if (clientY <= - 100 && clientY >= -150) {
            this.setState({ aboutMounted: true }, () => { })
        }
    }



    render() {
        const { projects } = this.state
        // const { user } = this.props
        // if (!user) return <div>Log in</div>
        return (
            <div className="home-page">
                <Greet></Greet>
                <About></About>
                {projects && <ProjectList projects={projects}></ProjectList>}
                <Contact></Contact>

                {/* <div className="user-details">
                    <h4><img src={defaultUser} alt="" />Hello {user.name}</h4>
                    <h4><img src={coins} alt="" /> Dollars: {this.coinsForDisplay} ({user.coins} BTC)</h4>
                    <h4><img src={bitcoin} alt="" />BTC: {bitcoinRate}</h4>
                    {user.moves.length && <MoveList isHome={true} moves={user.moves.slice(0, 3)} />}
                </div> */}
            </div>
        )
    }
}


// const mapStateToProps = state => {
//     return {
//         user: state.userReducer.user
//     }
// }
// const mapDispatchToProps = {
//     signup,
// }
// export const HomePage = connect(mapStateToProps, mapDispatchToProps, null)(_HomePage)
