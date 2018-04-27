import { types } from "mobx-state-tree";
import { constructMessage } from "../validationUtils";

//Todo - extract to a separate validation object with zero dependancies
function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export const Email = types.custom({
  name: "Email",
  fromSnapshot(value) {
    return value;
  },
  toSnapshot(value) {
    return value;
  },
  isTargetType(value) {
    return validateEmail(value);
  },
  getValidationMessage(value) {
    return constructMessage("invalid email");
  }
});
