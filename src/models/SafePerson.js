import { types } from "mobx-state-tree";
import { Email } from "../customTypes/Email";
import { Adult } from "../customTypes/Numbers";

export const Person = types.model("Person", {
  id: types.identifier(),
  email: Email,
  age: Adult,
  firstName: types.maybe(types.string),
  lastName: types.maybe(types.string)
});
