import styles from './Preview.module.css';
let marked = require("marked");

const Preview = (props) => {
  return (
    <div className={`${styles.preview_wrapper} col-md-6 px-0 h-100`}>
      <div className={styles.preview_header}>
        <h6>Preview</h6>
      </div>
      <div className={styles.preview} dangerouslySetInnerHTML={{ __html: marked(props.previewValue) }}>

      </div>
    </div>
  )
}

export default Preview;