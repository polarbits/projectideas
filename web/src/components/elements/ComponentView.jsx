import React from 'react';
// import {observer} from 'mobx-react'
import ImageUpload from './ImageUpload';


const Step = ({step, onChange}) => {
  return (
    <li>
    {step.type === "textarea" && <textarea value={step.content}/>}
    {step.type === "image" && <ImageUpload/>}
    {/* {step.type === "image" && <input type="file" onChange={onChange} name="pic" accept="image/*"/>} */}
    {step.type === "title" && <input type="text" onChange={onChange} value={step.content} />}
    </li>
    // <li><input type={step.type}>step.content</input></li>
  )
}


const ComponentView = ({components, onChange}) => {
  let stepNode;
  if(components.items.length === 0) {
    stepNode=null;
  }
  else {
  stepNode =  components.map((step) => {
    return (<Step step={step} onChange={onChange}/>)
  })}

  return (
  <div className="">
    <ol>
      {stepNode}
    </ol>
  </div>
)};

export default (ComponentView);