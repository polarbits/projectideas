import {types} from "mobx-state-tree";
import ProjectIdeaStore from "./ProjectIdeaStore"

const RootStore = types.model('RootStore',{
  projectIdeaStore: types.optional(ProjectIdeaStore,{})
});

export default RootStore;