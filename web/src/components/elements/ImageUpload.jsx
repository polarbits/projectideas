import React from 'react';
import styles from '../../styles/ImageUploadStyles.css'


export default class ImageUpload extends React.Component {
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

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }

  render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
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
        </form>
        <div className={styles.imgPreview}>
          {$imagePreview}
        </div>
      </div>
    )
  }
}
  