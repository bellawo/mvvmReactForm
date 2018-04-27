import * as React from "react";
import { render } from "react-dom";
import { addMiddleware } from "mobx-state-tree";
import { carImportStore } from "./models/carImportStore";
import { validationMiddleware } from "./validationMiddleware";
import { Person, personInitialState } from "./models/Person";
import { Person as PersonView } from "./components/Person";

const store = carImportStore.create({
  requester: Person.create(Object.assign({}, personInitialState)),
  approver: Person.create(Object.assign({}, personInitialState))
});

// This middleware intercepts unchecking todo's, and make sure captions for new todo's are uppercased
addMiddleware(store, validationMiddleware);

render(
  <div>
    <h1>MST Validation Middleware Demo</h1>
    MiddleWare in this app validates inputs base of their types
    <br />
    <h3>Requester</h3>
    <PersonView person={store.requester} />
    <h3>Approver</h3>
    <PersonView person={store.approver} />
  </div>,
  document.getElementById("root")
);
