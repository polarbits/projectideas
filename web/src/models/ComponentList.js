import {types} from "mobx-state-tree";
import Constants from '../Constants'

export const component = {
  "type": 'textarea',
  "content": 'This is first task todo in this project'
}

export const ComponentItem = types.model({
  type: types.string,
  content: types.optional(types.string,"")
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

export const ComponentStore = types.model({
  items: types.optional( types.array(ComponentItem),[])
})
.actions(self => ({
  add(item) {
    self.items.push(item);
  },
  addImageComponent(){
    const imageItem = ComponentItem.create({type: Constants.ComponentImageType});
    self.items.push(imageItem);
  },
  addTextareaComponent(){
    const textareaItem = ComponentItem.create({type: Constants.ComponentTextareaType});
    self.items.push(textareaItem);
  },
  addTextComponent(){
    const textItem = ComponentItem.create({type: Constants.ComponentTitleType});
    self.items.push(textItem);
  },
  delete(itemIndex){
    self.items.splice(itemIndex,1);
  }
}))
.views(self => ({
  get totalSteps() {
    return self.items.reduce((sum)=>sum+1, 0)
  }
}))

