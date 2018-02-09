/* eslint-disable no-param-reassign */
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
  },
  moveDown(itemIndex) {
    if(self.items.length<2){return}
    if(itemIndex>=self.items.length-1){return}
    const reorderArray = new Array(self.items.length);
    for (let i = 0; i < self.items.length; i++) {
      reorderArray[i] = {
        type:self.items[i].type,
        content: self.items[i].content
      } ;
    }
    const tempItem = reorderArray[itemIndex+1];
    reorderArray[itemIndex+1] = reorderArray[itemIndex];
    reorderArray[itemIndex] = tempItem;

    self.items = reorderArray;
  },
  moveUp(itemIndex) {
    if(self.items.length<2){return}
    if(itemIndex<1){return}
    const reorderArray = new Array(self.items.length);
    for (let i = 0; i < self.items.length; i++) {
      reorderArray[i] = {
        type:self.items[i].type,
        content: self.items[i].content
      } ;
    }
    const tempItem = reorderArray[itemIndex-1];
    reorderArray[itemIndex-1] = reorderArray[itemIndex];
    reorderArray[itemIndex] = tempItem;

    self.items = reorderArray;
  }
}))
.views(self => ({
  get totalSteps() {
    return self.items.reduce((sum)=>sum+1, 0)
  }
}))

