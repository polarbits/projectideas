import React from 'react';
import {observer,inject} from 'mobx-react'
import ImageUpload from './ImageUpload';
import TextareaInput from './TextareaInput'
import TextboxInput from './TextboxInput'
import Constants from '../../Constants'


const Step = ({step,itemIndex}) => {
  return (
    <li>
    {step.type === Constants.ComponentTextareaType && <TextareaInput step={step} itemIndex={itemIndex} /> }
    {step.type === Constants.ComponentImageType && <ImageUpload/>}
    {/* {step.type === "image" && <input type="file" onChange={onChange} name="pic" accept="image/*"/>} */}
    {step.type === Constants.ComponentTitleType && <TextboxInput  step={step} itemIndex={itemIndex} /> }
    </li>
    // <li><input type={step.type}>step.content</input></li>
  )
}


const ComponentView = inject("store")(observer(({store}) => {
  let stepNode;
  console.log(store.projectIdeaStore.components.items.length)
  if(store.projectIdeaStore.components.items.length === 0) {
    stepNode=null;
  }
  else {
    // TODO: Add key to mapped items
  stepNode =  store.projectIdeaStore.components.items.map((step,index) => {
    return (<Step step={step} itemIndex={index}/>)
  })}

  return (
  <div className="">
    <ol>
      {stepNode}
    </ol>
  </div>
)}));

export default ComponentView;