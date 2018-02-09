import React from 'react';
import {observer,inject} from 'mobx-react'
import Step from './Step'

const ComponentView = inject("store")(observer(({store}) => {
  const stepNode =  store.projectIdeaStore.components.items.map((step,index) => {
    return (<Step step={step} itemIndex={index}/>)
  })
  return (
  <div className="">
    <ol>
      {stepNode}
    </ol>
  </div>
)}));

export default ComponentView;