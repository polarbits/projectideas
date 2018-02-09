import React from 'react';
import PropTypes from 'prop-types'
import styles from '../../styles/ImageUploadStyles.css'
import DeleteButton from './DeleteButton'; 
import {ReorderButtonUp,ReorderButtonDown} from './ReorderButtons'


class ImageUploadInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {file: '',imagePreviewUrl: ''};
  }

  handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log('handle uploading-', this.state.file);
  }

  handleImageChange(e) {
    e.preventDefault();

    const reader = new FileReader();
    const file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }

  render() {
    let {imagePreviewUrl} = this.state;
    const {itemIndex} = this.props;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} alt="img"/>);
    } else {
      $imagePreview = (<div className={styles.previewText}>Please select an Image for Preview</div>);
    }

    return (
      <div className={styles.previewComponent}>
        <form onSubmit={(e)=>this.handleSubmit(e)}>
          <input className={styles.fileInput} 
            type="file" 
            onChange={(e)=>this.handleImageChange(e)} />
          <button className={styles.submitButton}
            type="submit" 
            onClick={(e)=>this.handleSubmit(e)}>Upload Image</button>
            <ReorderButtonUp itemIndex={itemIndex}/>
            <ReorderButtonDown  itemIndex={itemIndex}/>
            <DeleteButton itemIndex={itemIndex}/>
        </form>
        <div className={styles.imgPreview}>
          {$imagePreview}
        </div>
      </div>
    )
  }
}
  
ImageUploadInput.propTypes = {
  itemIndex: PropTypes.string.isRequired
}

export default ImageUploadInput