import { types } from "mobx-state-tree";
import { constructMessage } from "../validationUtils";

//TODO - extract validation functionality and message
function validateInteger(value) {
  const input = Number(value);
  return Number.isInteger(input);
}

const Integer = types.custom({
  name: "Integer",
  fromSnapshot(value) {
    return value;
  },
  toSnapshot(value) {
    return Number(value);
  },
  isTargetType(value) {
    return validateInteger(value);
  },
  getValidationMessage(value) {
    return constructMessage("not an integer");
  }
});

const Adult = types.refinement(
  Integer,
  function(s) {
    return Number(s) > 18;
  },
  s => constructMessage("must be over 18")
);

export { Integer, Adult };
