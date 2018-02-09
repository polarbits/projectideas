import React from "react";
import SyncanoClient from '@syncano/client'
import { observer, inject } from "mobx-react"
import ComponentView from "../elements/ComponentView";
import InsertContentPanel from "../elements/InsertContentPanel";


class ProjectIdeaForm extends React.Component {

  onSubmit = (e) => {
    e.preventDefault();
    const { store } = this.props;
    const s = new SyncanoClient('polar-ideas-001');
    s.post('projectsideas/add-idea', {title: store.projectIdeaStore.title, short_description: store.projectIdeaStore.description})
    .then((res)=> {
      console.log(res);
      store.projectIdeaStore.components.items.forEach((item)=> {
        s.post('projectsideas/add-component', {component_type: item.type, component_content: item.content} )
      })
    })
  }

    render() {
      const { store } = this.props;
    return (
      <div className="">
        <form>
          <label htmlFor="title">Title: </label>
          <input type="text" name="title" id="title" value={store.projectIdeaStore.title} onChange={e => store.projectIdeaStore.changeTitle(e.target.value)} />
          <br />
          <label htmlFor="description">Description: </label>
          <input type="text" name="description" id="description" value={store.projectIdeaStore.description} onChange={e => store.projectIdeaStore.changeDesc(e.target.value)} />
          <ComponentView />
          <InsertContentPanel/>
          <input type="submit" onClick={this.onSubmit} />
        </form>
      </div>
    );
  }
}

export default inject("store")(observer(ProjectIdeaForm));
