import { types } from "mobx-state-tree";
import { Person } from "./Person";

export const carImportStore = types.model("carImportStore", {
  requester: Person,
  approver: Person
});
