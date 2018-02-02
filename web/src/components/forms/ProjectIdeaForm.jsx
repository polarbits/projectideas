import React from "react";
import ProjectIdeaBody from "../elements/ProjectIdeaBody";
import InsertContentPanel from "../elements/InsertContentPanel";

class ProjectIdeaForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          data: {
            title: '',
            components: []

          },
          loading: false,
          errors: {}
        }
    }

    onChange = e => {
      console.log(e.target.name)
      console.log(e.target.value)
        this.setState({
        data: { ...this.state.data, [e.target.name]: e.target.value }
    });
  }

  addImage = (e) => {
    e.preventDefault();
    const {data} = this.state;
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

    render() {
      const {data, errors, loading } = this.state;
    return (
      <div className="">
        <form>
          <label>Title: </label>
          <input type="text" name="title" id="title" value={data.title} onChange={this.onChange}></input>


          <ProjectIdeaBody components={data.components} onChange={this.onChange}/>
          
          {/* content picker */}
<InsertContentPanel addImage={this.addImage} addText={this.addText}  addTitle={this.addTitle}/>
          {/* <button onClick={addStep}>+</button> */}
          <input type="submit"></input>
        </form>
        {/* //form //tytul //przycisk dodajacy do state nowy item w miejscu z jego
        id //component_item renderowanie jesli jakis jest */}
      </div>
    );
  }
}

export default ProjectIdeaForm;
