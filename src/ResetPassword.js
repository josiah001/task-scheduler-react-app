import React from "react";

class ResetPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current_password: "",
      new_password: "",
      confirm_password: "",
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    // send to database for password reset
  }

  render() {
    return (
      <div>
        <fieldset>
          <legend>Reset Password</legend>
          <form onSubmit={this.onSubmit}>

            <label htmlFor="current_password">Current Password</label>
            <input
              type="password"
              id="current_password"
              name="current_password"
              onChange={this.onChange}/><br />

            <label htmlFor="new_password">New Password</label>
            <input
              type="password"
              id="new_password"
              name="new_password"
              onChange={this.onChange}/><br />

            <label htmlFor="confirm_password">Confirm Password</label>
            <input
              type="password"
              id="confirm_password"
              name="confirm_password"
              onChange={this.onChange}/><br />

            <input type="submit" value="Reset Password" />
          </form>
        </fieldset>
      </div>
    )
  }
}

export default ResetPassword;
