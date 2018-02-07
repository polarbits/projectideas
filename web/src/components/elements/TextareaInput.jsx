import React from 'react';
import {observer} from 'mobx-react'
import PropTypes from 'prop-types'; 

const TextareaInput = ({step,itemIndex}) => (
  <div className="">
    <textarea value={step.content}  onChange={e => step.changeContent(e.target.value)}/>
  </div>
);

TextareaInput.propTypes = {
  step: PropTypes.shape({
    type: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
  }).isRequired,
  itemIndex: PropTypes.number.isRequired
}

export default observer(TextareaInput);