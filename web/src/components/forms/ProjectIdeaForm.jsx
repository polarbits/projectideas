import React from "react";
import SyncanoClient from '@syncano/client'
import {observer} from 'mobx-react';
import ComponentView from "../elements/ComponentView";
import InsertContentPanel from "../elements/InsertContentPanel";

class ProjectIdeaForm extends React.Component {
    onChange = e => {
        this.setState({
        data: { ...this.state.data, [e.target.name]: e.target.value }
    });
  }

  addImage = (e) => {
    e.preventDefault();
    const {data} = this.state;
    console.log('addImage')
    data.components.push({
      type: 'image',
      content: ''
    });
    this.setState({data})
    console.log(this.state);
  }

  addText = (e) => {
    e.preventDefault();
    const {data} = this.state;
    data.components.push({
      type: 'textarea',
      content: ''
    });
    this.setState({...this.state.data, data});
  }

  addTitle = (e) => {
    e.preventDefault();
    const {data} = this.state;
    data.components.push({
      type: 'title',
      content: ''
    });
    this.setState({...this.state.data, data});
  }

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
    return (
      <div className="">
        <form>
          <label>Title: </label>
          <input type="text" name="title" id="title" value={store.title} onChange={e => store.changeTitle(e.target.value)}></input>
          <br />
          <label>Description: </label>
          <input type="text" name="description" id="description" value={store.description} onChange={e => store.changeDesc(e.target.value)}></input>


          <ComponentView components={store.components}/>
          
          {/* content picker */}
<InsertContentPanel store={store} addImage={this.addImage} addText={this.addText}  addTitle={this.addTitle}/>
          {/* <button onClick={addStep}>+</button> */}
          <input type="submit" onClick={this.onSubmit}></input>
        </form>
        {/* //form //tytul //przycisk dodajacy do state nowy item w miejscu z jego
        id //component_item renderowanie jesli jakis jest */}
      </div>
    );
  }
}

export default observer(ProjectIdeaForm);
