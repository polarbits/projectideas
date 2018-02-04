import {types} from "mobx-state-tree";

export const component = {
  "type": 'textarea',
  "content": 'This is first task todo in this project'
}

export const ComponentListItem = types.model({
  type: types.string,
  content: types.string
})
.actions(self => ({
  changeType(newType){
    self.type = newType
  },
  changeContent(newContent){
    self.content = newContent
  },
}))
  
  // {
  // function setType(newType) {
  //   self.type = newType
  // }
  // return {setType}
// })

export const ComponentList = types.model({
  items: types.optional( types.array(ComponentListItem),[])
})
.actions(self => ({
  add(item) {
    self.items.push(item)
  },
  changeContent(newContent) {
    self.content = newContent;
  }
}))

