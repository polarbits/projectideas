/* eslint-disable no-param-reassign */
import {types} from "mobx-state-tree";
import SyncanoClient from '@syncano/client'

const SyncanoClientStore = types.model("SyncanoClientStore",{
})
.actions( self=> {
const syncanoClient = new SyncanoClient('polar-ideas-001') 
  function postAddIdea(args) {
    syncanoClient.post('projectsideas/add-idea', args)
  }
})

export default SyncanoClientStore;