import React from 'react';
import {PropTypes} from 'prop-types'
import ImageUploadInput from './ImageUploadInput';
import TextareaInput from './TextareaInput'
import TextboxInput from './TextboxInput'
import Constants from '../../Constants'


const Step = ({step,itemIndex}) => (
  <li>
    {step.type === Constants.ComponentTextareaType && <TextareaInput step={step} itemIndex={itemIndex} /> }
    {step.type === Constants.ComponentImageType && <ImageUploadInput itemIndex={itemIndex}/>}
    {step.type === Constants.ComponentTitleType && <TextboxInput  step={step} itemIndex={itemIndex} /> }
  </li>
)

Step.propTypes = {
  step: PropTypes.shape({
    type: PropTypes.string.isRequired,
    content: PropTypes.string
  }).isRequired,
  itemIndex: PropTypes.number.isRequired
}

export default Step;