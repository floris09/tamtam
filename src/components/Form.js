import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import CheckIcon from 'material-ui/svg-icons/action/done'
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
      subFirstNameVal: true,
      subLastNameVal: true,
      subEmailAddressVal: true,
      subPhoneNumberVal: true
    }

    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(event) {
    const target = event.target
    const value = target.value
    const name = target.name
    const regexpEmail = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
    const regexpPhone = /^[0-9]+$/

    if (name === "firstName") {
      this.setState({ firstNameIsValid: value && value.indexOf(' ') < 0 })
    }

    if (name === "lastName") {
      this.setState({ lastNameIsValid: value && value.indexOf(' ') < 0 })
    }

    if (name === "emailAddress") {
      this.setState({ emailAddressIsValid: value && value.match(regexpEmail) !== null })
    }

    if (name === "phoneNumber") {
      this.setState({ phoneNumberIsValid: value.match(regexpPhone)!== null })
    }

    this.setState({
      [name]: value
    })
  }

  handleSubmit(){
    const { firstNameIsValid, lastNameIsValid, emailAddressIsValid, phoneNumberIsValid } = this.state

    if ((firstNameIsValid===true && phoneNumberIsValid===true)&&(lastNameIsValid===true && emailAddressIsValid===true)){
      return this.props.push('/success')
    }

    firstNameIsValid ? this.setState({subFirstNameVal:true}) : this.setState({subFirstNameVal:false})

    lastNameIsValid ? this.setState({subLastNameVal:true}) : this.setState({sublastNameVal:false})

    emailAddressIsValid ? this.setState({subEmailAddressVal:true}) : this.setState({subEmailAddressVal:false})

    if (this.state.phoneNumber === ''){ this.setState({subPhoneNumberVal:true}) }
    else {
    phoneNumberIsValid ? this.setState({subPhoneNumberVal:true}) : this.setState({subPhoneNumberVal:false})
    }
  }

render() {
  return (
    <div className='form-container'>

      <div className={this.state.firstNameIsValid ? 'firstName valid' : 'firstName'}>
        <CheckIcon />
      </div>
      <div className={this.state.subFirstNameVal ? 'submitFirstName' : 'submitFirstName submitInvalid'}>
        We need your first name.
      </div>

      <div className={this.state.lastNameIsValid ? 'lastName valid' : 'lastName'}>
        <CheckIcon />
      </div>
      <div className={this.state.subLastNameVal ? 'submitLastName' : 'submitLastName submitInvalid'}>
        We need your last name.
      </div>

      <div className={this.state.emailAddressIsValid ? 'emailAddress valid' : 'emailAddress'}>
        <CheckIcon />
      </div>
      <div className={this.state.subEmailAddressVal ? 'submitEmailAddress' : 'submitEmailAddress submitInvalid'}>
        Please use a valid e-mail address.
      </div>

      <div className={this.state.phoneNumberIsValid ? 'phoneNumber valid' : 'phoneNumber'}>
        <CheckIcon />
      </div>
      <div className={this.state.subPhoneNumberVal ? 'submitPhoneNumber' : 'submitPhoneNumber submitInvalid'}>
        Please use a valid phone number.
      </div>

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
