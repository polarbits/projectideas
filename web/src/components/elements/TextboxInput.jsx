import React from 'react';
import {observer} from 'mobx-react'
import PropTypes from 'prop-types'; 
import DeleteButton from './DeleteButton'; 

const TextboxInput = ({step,itemIndex}) => (
  <div className="">
    <input type="text" value={step.content}  onChange={e => step.changeContent(e.target.value)} />
    <DeleteButton step={step} itemIndex={itemIndex}/>
  </div>
);

TextboxInput.propTypes = {
  step: PropTypes.shape({
    type: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
  }).isRequired,
  itemIndex: PropTypes.number.isRequired
}

export default observer(TextboxInput);