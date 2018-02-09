import {types} from "mobx-state-tree";
import ProjectIdeaStore from "./ProjectIdeaStore"
import SyncanoClientStore from "./SyncanoClientStore"

const RootStore = types.model('RootStore',{
  projectIdeaStore: types.optional(ProjectIdeaStore,{})
  // ,
  // syncanoClientStore: SyncanoClientStore.create({})
});

export default RootStore;