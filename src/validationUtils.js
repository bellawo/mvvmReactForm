import { CHANGE } from "./actionTypes";

const messageIdentifier = "###";

export const extractMessage = message => {
  const messageExpression = `${messageIdentifier}(.*?)${messageIdentifier}`;
  const messageRegularExpression = new RegExp(messageExpression);

  const result = message.match(messageRegularExpression);
  return result ? result[1] : "";
};

export const constructMessage = message => {
  return `${messageIdentifier} ${message} ${messageIdentifier}`;
};

export const isChangeAction = actionName => actionName.startsWith(CHANGE);
