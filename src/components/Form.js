import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
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
      firstNameIsValid: true,
      lastNameIsValid: true,
      emailAddressIsValid: true,
      phoneNumberIsValid: true
    }

    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(event) {
    const target = event.target
    const value = target.value
    const name = target.name

    if (name === "firstName") {
      this.setState({ firstNameIsValid: value && value.indexOf(' ') < 0 })
    }

    if (name === "lastName") {
      this.setState({ lastNameIsValid: value && value.indexOf(' ') < 0 })
    }

    if (name === "emailAddress") {
      this.setState({ emailAddressIsValid: value && value.indexOf(' ') < 0 })
    }

    if (name === "phoneNumber") {
      this.setState({ phoneNumberIsValid: value && value.indexOf(' ') < 0 })
    }

    this.setState({
      [name]: value
    })
  }

render() {
  return (
    <div className='form-container'>
      <div className={this.state.emailAddressIsValid ? '' : 'invalid'} />
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
      <div className='send-button'>
        <p>Send</p>
      </div>
    </div>
  )
}
}

export default connect(null, {  })(Form)
