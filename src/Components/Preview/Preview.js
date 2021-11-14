import styles from './Preview.module.scss';
import { BiCodeAlt } from "react-icons/bi";

const Preview = (props) => {
  return (
    <div className={`${props.classSet} col-md-6 px-0 h-100`}>
      <div className={styles.preview_header}>
        <h6>Preview</h6>
        <BiCodeAlt onClick={() => props.setActiveView('preview') } className={`${styles['preview_header-icon']} d-md-none`}/>
      </div>
      <div className={styles.preview} dangerouslySetInnerHTML={{ __html: props.previewValue }}>

      </div>
    </div>
  )
}

export default Preview;