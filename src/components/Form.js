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
      this.setState({ messageIsValid: value !== '' })
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

    lastNameIsValid ? this.setState({subLastNameVal:true}) : this.setState({subLastNameVal:false})

    emailAddressIsValid ? this.setState({subEmailAddressVal:true}) : this.setState({subEmailAddressVal:false})

    messageIsValid ? this.setState({subMessageVal:true}) : this.setState({subMessageVal:false})

  }


render() {
  return (
    <div className='form-container'>

      <form className='form'>

        <div className='input-container'>
          <input
            className='input-small'
            name="firstName"
            type="text"
            placeholder='First name'
            value={this.state.firstName}
            onChange={this.handleInputChange} />
            <div className={this.state.subFirstNameVal ? 'submitFirstName' : 'submitFirstName submitInvalid'}>
              We need your first name.
            </div>
            <div className={this.state.firstNameIsValid ? 'firstName valid' : 'firstName'} id={this.state.subFirstNameVal ? '' : 'moveFirstName'}>
              <CheckIcon style={{color:'#7BDB4C'}} />
            </div>
        </div>

        <div className='input-container'>
          <input
            className='input-small'
            name="lastName"
            type="text"
            placeholder="Last name"
            value={this.state.lastName}
            onChange={this.handleInputChange} />
            <div className={this.state.subLastNameVal ? 'submitLastName' : 'submitLastName submitInvalid'}>
              We need your last name.
            </div>
            <div className={this.state.lastNameIsValid ? 'lastName  valid' : 'lastName'} id={this.state.subLastNameVal ? '' : 'moveLastName'}>
              <CheckIcon style={{color:'#7BDB4C'}}/>
            </div>
        </div>
        <br />
        <div className='form-fields'>

         <div className='input-container'>
          <input
            className='input-small'
            name="emailAddress"
            type="text"
            placeholder="Your e-mail address"
            value={this.state.emailAddress}
            onChange={this.handleInputChange} />
            <div className={this.state.subEmailAddressVal ? 'submitEmailAddress' : 'submitEmailAddress submitInvalid'}>
              Please use a valid email address.
            </div>
            <div className={this.state.emailAddressIsValid ? 'emailAddress valid' : 'emailAddress'} id={this.state.subEmailAddressVal ? '' : 'moveEmailAddress'}>
              <CheckIcon style={{color:'#7BDB4C'}}/>
            </div>
          </div>

        <div className='input-container'>
          <input
            className='input-small'
            name="phoneNumber"
            type="text"
            placeholder="Your phone number (optional)"
            value={this.state.phoneNumber}
            onChange={this.handleInputChange} />
          </div>
        </div>
        <br />
        <div className='textarea-container'>
        <textarea
          className='textarea'
          name="message"
          type="text"
          placeholder="Your message..."
          value={this.state.message}
          onChange={this.handleInputChange} />
          <div className={this.state.subMessageVal ? 'submitMessage' : 'submitMessage submitInvalid'}>
            Sorry, your message can&#39;t be empty
          </div>
          </div>
      </form>
      <div className='send-button' onClick={this.handleSubmit.bind(this)}>
        <p>Send</p>
      </div>
    </div>
  )
}
}

export default connect(null, { push })(Form)
