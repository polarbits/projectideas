import React from "react";
import ProjectIdeaForm from "../forms/ProjectIdeaForm";
import ProjectIdeaStore from "../../models/ProjectIdeaStore"

// const store = ProjectIdeaStore.create();

class ProjectIdeaPage extends React.Component {
  render() {
    return (
      <div className="">
        <ProjectIdeaForm  />
      </div>
    );
  }
}

export default ProjectIdeaPage;
