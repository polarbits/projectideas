import {types} from "mobx-state-tree";

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
    const imageItem = ComponentItem.create({type: "image"});
    self.items.push(imageItem);
  },
  addTextareaComponent(){
    const textareaItem = ComponentItem.create({type: "textarea"});
    self.items.push(textareaItem);
  },
  addTextComponent(){
    const textItem = ComponentItem.create({type: "title"});
    self.items.push(textItem);
  }
}))
.views(self => ({
  get totalSteps() {
    return self.items.reduce((sum)=>sum+1, 0)
  }
}))

