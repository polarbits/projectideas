import React from 'react';
import {observer} from 'mobx-react'
import PropTypes from 'prop-types'; 

const DeleteButton = (itemIndex) => (
  <div className="">
    <button onClick={e=>{
      e.preventDefault();
       }}></button>
  </div>
);

DeleteButton.propTypes = {
  step: PropTypes.shape({
    type: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
  }).isRequired,
  itemIndex: PropTypes.number.isRequired
}


export default observer(DeleteButton);