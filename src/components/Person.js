import { observer } from "mobx-react";
import Input from "./Input"
import * as React from "react";


@observer
export class Person extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { person } = this.props || {};
    const errorStyle = { color: "red" };
    return (
      <div>
       <Input label='EMail' onChange={this.props.changeEmail} vali />
       <Input label='Age' onChange={this.props.changeAge} />
      </div>
    );
  }
  handleEmailChange = e => {
    this.props.person.changeEmail(e.target.value, {
      propertyName: "email"
    });
    this.setState({ validation: this.validation });
  };
  handleAgeChange = e => {
    this.props.person.changeAge(e.target.value, {
      propertyName: "age"
    });
  
  };
}
