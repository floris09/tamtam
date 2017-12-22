import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import CheckIcon from 'material-ui/svg-icons/action/done'
import firstNameImg from '../assets/firstNameValidation.png'
import lastNameImg from '../assets/lastNameValidation.png'
import emailImg from '../assets/emailAddressValidation.png'
import messageImg from '../assets/messageValidation.png'
import '../styles/components/Form.css'

class Form extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      emailAddress: '',
      phoneNumber: '',
      message: '',
      firstNameIsValid: false,
      lastNameIsValid: false,
      emailAddressIsValid: false,
      phoneNumberIsValid: false,
      messageIsValid: false,
      subFirstNameVal: true,
      subLastNameVal: true,
      subEmailAddressVal: true,
      subPhoneNumberVal: true,
      subMessageVal: true
    }

    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(event) {
    const target = event.target
    const value = target.value
    const name = target.name
    const regexpEmail = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/

    if (name === "firstName") {
      this.setState({ firstNameIsValid: value && value.indexOf(' ') < 0 })
    }

    if (name === "lastName") {
      this.setState({ lastNameIsValid: value && value.indexOf(' ') < 0 })
    }

    if (name === "emailAddress") {
      this.setState({ emailAddressIsValid: value && value.match(regexpEmail) !== null })
    }

    if (name === "message") {
      this.setState({ messageIsValid: value })
    }

    this.setState({
      [name]: value
    })
  }

  handleSubmit(){
    const { firstNameIsValid, lastNameIsValid, emailAddressIsValid, messageIsValid } = this.state

    if ((firstNameIsValid===true && messageIsValid===true)&&(lastNameIsValid===true && emailAddressIsValid===true)){
      return this.props.push('/success')
    }

    firstNameIsValid ? this.setState({subFirstNameVal:true}) : this.setState({subFirstNameVal:false})

    lastNameIsValid ? this.setState({subLastNameVal:true}) : this.setState({sublastNameVal:false})

    emailAddressIsValid ? this.setState({subEmailAddressVal:true}) : this.setState({subEmailAddressVal:false})

    messageIsValid ? this.setState({subMessageVal:true}) : this.setState({subMessageVal:false})

  }


render() {
  return (
    <div className='form-container'>

      <div className={this.state.firstNameIsValid ? 'firstName valid' : 'firstName'}>
        <CheckIcon />
      </div>
      <img src={{firstNameImg}} alt='validation-error' className={this.state.subFirstNameVal ? 'submitFirstName' : 'submitFirstName submitInvalid'} />

      <div className={this.state.lastNameIsValid ? 'lastName valid' : 'lastName'}>
        <CheckIcon />
      </div>
      <img src={{lastNameImg}} alt='validation-error' className={this.state.subLastNameVal ? 'submitLastName' : 'submitLastName submitInvalid'} />

      <div className={this.state.emailAddressIsValid ? 'emailAddress valid' : 'emailAddress'}>
        <CheckIcon />
      </div>
      <img src={{emailImg}} alt='validation-error' className={this.state.subEmailAddressVal ? 'submitEmailAddress' : 'submitEmailAddress submitInvalid'} />

      <img src={{messageImg}} alt='validation-error' className={this.state.subMessageVal ? 'submitMessage' : 'submitMessage submitInvalid'} />

      <form className='form'>
          <input
            className='input-small'
            name="firstName"
            type="text"
            placeholder='First name'
            value={this.state.firstName}
            onChange={this.handleInputChange} />
          <input
            className='input-small'
            name="lastName"
            type="text"
            placeholder="Last name"
            value={this.state.lastName}
            onChange={this.handleInputChange} />
        <br />
          <input
            className='input-small'
            name="emailAddress"
            type="text"
            placeholder="Your e-mail address"
            value={this.state.emailAddress}
            onChange={this.handleInputChange} />

          <input
            className='input-small'
            name="phoneNumber"
            type="text"
            placeholder="Your phone number (optional)"
            value={this.state.phoneNumber}
            onChange={this.handleInputChange} />
        <br />
        <textarea
          className='textarea'
          name="message"
          type="text"
          placeholder="Your message..."
          value={this.state.message}
          onChange={this.handleInputChange} />
      </form>
      <div className='send-button' onClick={this.handleSubmit.bind(this)}>
        <p>Send</p>
      </div>
    </div>
  )
}
}

export default connect(null, { push })(Form)
