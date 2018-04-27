import { types } from "mobx-state-tree";
import { Email } from "../customTypes/Email";
import { Adult } from "../customTypes/Numbers";

export const personInitialState = {
  id: "aaa",
  email: "",
  age: "",
  firstName: "",
  lastName: ""
};
export const BackPerson=types.model("Person", {
  id: types.identifier(),
  email: types.maybe(types.string),
  age: types.maybe(types.string),
  firstName: types.maybe(types.string),
  lastName: types.maybe(types.string)
})
.volatile(self => (
  {
      messages:{
        email: '',
        age: '',
        firstName: '',
        lastName:''
      }
  }));
export const Person = types
  .model("Person", {
    id: types.identifier(),
    email: Email,
    age: Adult,
    firstName: types.maybe(types.string),
    lastName: types.maybe(types.string)
  })
  .actions(self => {
    function changeEmail(newValue) {
      self.email = newValue;
    }
    function changeAge(newValue) {
      self.age = newValue;
    }
    return {
      changeEmail,
      changeAge
    };
  })
  .views(self => {
    function fullName() {
      return `${self.firstName} ${self.lastName}`;
    }
    return {
      fullName
    };
  })
  
   
    ;

