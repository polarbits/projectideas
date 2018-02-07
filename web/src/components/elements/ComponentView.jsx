import React from 'react';
import {observer} from 'mobx-react'
import ImageUpload from './ImageUpload';


const Step = ({step}) => {
  return (
    <li>
    {step.type === "textarea" && <textarea value={step.content}/>}
    {step.type === "image" && <ImageUpload/>}
    {/* {step.type === "image" && <input type="file" onChange={onChange} name="pic" accept="image/*"/>} */}
    {step.type === "title" && <input type="text" value={step.content} />}
    </li>
    // <li><input type={step.type}>step.content</input></li>
  )
}


const ComponentView = ({store}) => {
  let stepNode;
  console.log(store.components.items.length)
  if(store.components.items.length === 0) {
    stepNode=null;
  }
  else {
  stepNode =  store.components.items.map((step) => {
    return (<Step step={step}/>)
  })}

  return (
  <div className="">
    <ol>
      {stepNode}
    </ol>
  </div>
)};

export default observer(ComponentView);