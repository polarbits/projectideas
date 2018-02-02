import React from 'react';

const Step = ({step, onChange}) => {
  return (
    <li>
    {step.type === "textarea" && <textarea value={step.content}></textarea>}
    {step.type === "image" && <input type="file" onChange={onChange} name="pic" accept="image/*"/>}
    {step.type === "title" && <input type="text" onChange={onChange} value={step.content} />}
    </li>
    // <li><input type={step.type}>step.content</input></li>
  )
}

const ProjectIdeaBody = ({components, onChange}) => {
  const stepNode =  components.map((step) => {
    return (<Step step={step} onChange={onChange}/>)
  })

  return (
  <div className="">
    <ol>
      {stepNode}
    </ol>
  </div>
)};

export default ProjectIdeaBody;