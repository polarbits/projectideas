import React from "react";
import SyncanoClient from '@syncano/client'
import { observer, inject } from "mobx-react"
import ComponentView from "../elements/ComponentView";
import InsertContentPanel from "../elements/InsertContentPanel";


class ProjectIdeaForm extends React.Component {
  //   onChange = e => {
  //       this.setState({
  //       data: { ...this.state.data, [e.target.name]: e.target.value }
  //   });
  // }

  // addImage = (e) => {
  //   e.preventDefault();
  //   const {data} = this.state;
  //   console.log('addImage')
  //   data.components.push({
  //     type: 'image',
  //     content: ''
  //   });
  //   this.setState({data})
  //   console.log(this.state);
  // }

  // addText = (e) => {
  //   e.preventDefault();
  //   const {data} = this.state;
  //   data.components.push({
  //     type: 'textarea',
  //     content: ''
  //   });
  //   this.setState({...this.state.data, data});
  // }

  // addTitle = (e) => {
  //   e.preventDefault();
  //   const {data} = this.state;
  //   data.components.push({
  //     type: 'title',
  //     content: ''
  //   });
  //   this.setState({...this.state.data, data});
  // }

  onSubmit = (e) => {
    e.preventDefault();
    const {data} = this.state;
    const s = new SyncanoClient('polar-ideas-001');
    console.log(data)
    s.post('projectsideas/add-idea', {title: data.title, short_description: data.description})
    .then((res)=> {
      console.log(res);
      data.components.forEach((item)=> {
        s.post('projectsideas/add-component', {component_type: item.type, component_content: item.content} )
      })
    })
  }

    render() {
      const { store } = this.props;
      console.log(store);
    return (
      <div className="">
        <form>
          <label>Title: </label>
          <input type="text" name="title" id="title" value={store.projectIdeaStore.title} onChange={e => store.projectIdeaStore.changeTitle(e.target.value)}></input>
          <br />
          <label>Description: </label>
          <input type="text" name="description" id="description" value={store.projectIdeaStore.description} onChange={e => store.projectIdeaStore.changeDesc(e.target.value)}></input>


{/* //sprawdzic czy super przekazuje */}
          <ComponentView />
          
          <InsertContentPanel/>
          <input type="submit" onClick={this.onSubmit}></input>
        </form>
      </div>
    );
  }
}

export default inject("store")(observer(ProjectIdeaForm));
