import styles from './Preview.module.css';

const Preview = (props) => {
  return (
    <div className='col-md-6 px-0 h-100'>
      <div className={styles.preview_header}>
        <h6>Preview</h6>
      </div>
      <div className={styles.preview} dangerouslySetInnerHTML={{ __html: props.previewValue }}>

      </div>
    </div>
  )
}

export default Preview;