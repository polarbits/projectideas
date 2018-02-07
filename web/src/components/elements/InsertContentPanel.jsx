import React from 'react';

const InsertContentPanel = ({store, addImage, addText, addTitle}) => {
  console.log(store.components)
    return (
      <div>
  <ul>
    <li><button onClick={store.components.addImageComponent()}>Image</button></li>
    <li><button onClick={store.components.addTextareaComponent()}>Text</button></li>
    <li><button onClick={store.components.addTextComponent()}>Title</button></li>
  </ul>
</div>
)}


export default InsertContentPanel;

