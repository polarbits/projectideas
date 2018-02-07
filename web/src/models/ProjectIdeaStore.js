import {types} from "mobx-state-tree";
import {ComponentStore} from "./ComponentList"

const ProjectIdeaStore = types.model("ProjectIdeaStore",{
  title: types.optional(types.string,""),
  description: types.optional(types.string,""),
  components: types.optional(ComponentStore,{items:[]})
})
.actions(self => ({
  changeTitle(newTitle){
    self.title = newTitle
  },
  changeDesc(newDesc) {
    self.description = newDesc
  }
}))

export default ProjectIdeaStore;