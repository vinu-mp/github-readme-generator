import styles from './IconWrapper.module.css';
import Search from '../Search/Search';
import { useState } from 'react';
import {debounce} from 'lodash';

const IconWrapper = (props) => {
  const [imageData, setImageData] = useState(props.data);

  function searchLists(searchVal) {
    var imgDataUpdated = {}
    for(let item in props.data){
      imgDataUpdated[item] = props.data[item].filter(val => val.title.toLowerCase().includes(searchVal.toLowerCase()))
    }
    setImageData({...imgDataUpdated});
  }

  const populateLists = () => {
    const val = Object.keys(imageData).map(item => {
      return(<ul key={item} className={styles.wise_icon_group} data-display-name={item}>
        {imageData[item].map((val, index) => {
          return(
            <li key={`${val.title}_${index}`} className={styles.wise_icon} data-search-key={val.title}>
              <button><img alt={val.title} src={val.src} /></button>
            </li>
          )
        })}
      </ul>)
    })
    return val
  }

  return (
    <section className={styles['wise_icon-wrapper']}>
      <Search onSearchHandler={debounce(searchLists)}/>
      <div className={styles['wise_icon-overfow']}>
        <div className={styles['wise_icon-scroll']}>
          {populateLists()}
        </div>
      </div>
    </section>
  )
}

export default IconWrapper;