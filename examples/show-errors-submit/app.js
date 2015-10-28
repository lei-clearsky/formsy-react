var MyTextInput = require('./../components/FormsyInput');
var MySelect = require('./../components/Select');
var React = require('react');
var ReactDOM = require('react-dom');
var Formsy = require('formsy-react');

var MyFrom = React.createClass({
    getInitialState: function () {
      return {canSubmit: false}
    },
    handleClick: function (form, formReset, invalidateForm) {

    },
    enableButton: function () {
      this.setState({
          canSubmit: true
      });
    },
    disableButton: function () {
      this.setState({
          canSubmit: false
      });
    },
    render: function () {
      return ( 
        <Formsy.Form 
          onSubmit={this.handleClick} 
          onValid={this.enableButton}  
          onInvalid={this.disableButton} >
          <div >
              <MyTextInput 
                name="userName" 
                placeholder="username"
                label="Username"
                validations="minLength:5"
                validationError="Please input at least 5 charactors"
                required />
              <MyTextInput name="email" placeholder="Email"
                label="Email"
                required 
                validations="isEmail"
                validationError="Please enter an valid Email"
                required />
              <MyTextInput name="phone" placeholder="Phone Number"
                label="Phone"
                required 
                validations="isNumeric"
                validationError="This field should be numeric"
                required />
              <MySelect name="options" title="Please Select" 
                required
                options={[
                  { value: "option A", title: "Option A" },
                  { value: "option B", title: "Option B" },
                  { value: "option C", title: "Option C" }
                ]} />
          </div>
          <div className="panel-footer text-right">
              <input type="submit" 
                
                value="Send" />
          </div>
        </Formsy.Form>
      );
    }
});
// disabled={!this.state.canSubmit}
ReactDOM.render(<MyFrom/>, document.querySelector('#exampleInput'));
