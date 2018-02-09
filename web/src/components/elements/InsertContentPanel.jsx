import React from 'react';
import {observer,inject} from 'mobx-react'

const InsertContentPanel = inject("store")(observer(({store}) => (
      <div>
  <ul>
    <li><button onClick={e => {e.preventDefault(); store.projectIdeaStore.components.addImageComponent();}}>Image</button></li>
    <li><button onClick={e => {e.preventDefault(); store.projectIdeaStore.components.addTextareaComponent();}}>Text</button></li>
    <li><button onClick={e => {e.preventDefault(); store.projectIdeaStore.components.addTextComponent();}}>Title</button></li>
  </ul>
</div>
)))


export default InsertContentPanel;

