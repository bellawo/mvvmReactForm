import { extractMessage, isChangeAction } from "./validationUtils";
import { typecheck } from "mobx-state-tree";

export const validationMiddleware = (call, next, abort) => {
  if (isChangeAction(call.name)) {
    const validate = validationReducerFactory(call.args[0]);
    const propertyName =call.args[1].propertyName;
    const types =call.context.validators[propertyName];
   call.context.messages[propertyName] = types.reduce(validate, "");
  }
  next(call);
};

const validationReducerFactory = function(value) {
  const validationReducer = function(message, checkedType) {
    if (message === "") {
      try {
        typecheck(checkedType, value);
      } catch (e) {
        message = extractMessage(e.message);
      }
    }
    return message;
  };
  return validationReducer;
};
