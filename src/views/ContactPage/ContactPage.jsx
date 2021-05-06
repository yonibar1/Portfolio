import { Component } from 'react'
// import { connect } from 'react-redux'
// import { loadContacts } from '../../store/actions/contactActions'
import './ContactPage.scss'
export class ContactPage extends Component {
    // state = {
    //     filterBy: null,
    // }
    render() {
        // const { contacts } = this.props
        return (
            <div className="contact-page">
                {/* <ContactFilter onChangeFilter={this.onChangeFilter} />
                <ContactList contacts={contacts} /> */}
            </div>
        )
    }
}

// const mapStateToProps = state => {
//     return {
//         contacts: state.contactReducer.contacts,
//     }
// }

// const mapDispatchToProps = {
//     loadContacts,
// }

// export const ContactPage = connect(mapStateToProps, mapDispatchToProps)(_ContactPage)
