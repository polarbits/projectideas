import React from 'react';
import {observer} from 'mobx-react'

const InsertContentPanel = ({store, addImage, addText, addTitle}) => {
    return (
      <div>
  <ul>
    <li><button onClick={e => {e.preventDefault(); store.components.addImageComponent();}}>Image</button></li>
    <li><button onClick={e => {e.preventDefault(); store.components.addTextareaComponent();}}>Text</button></li>
    <li><button onClick={e => {e.preventDefault(); store.components.addTextComponent();}}>Title</button></li>
  </ul>
</div>
)}


export default observer(InsertContentPanel);

