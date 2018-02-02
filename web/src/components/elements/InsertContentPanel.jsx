import React from 'react';

const InsertContentPanel = ({addImage, addText, addTitle}) => {
    return (
      <div>
  <ul>
    <li><button onClick={addImage}>Image</button></li>
    <li><button onClick={addText}>Text</button></li>
    <li><button onClick={addTitle}>Title</button></li>
  </ul>
</div>
)}


export default InsertContentPanel;

