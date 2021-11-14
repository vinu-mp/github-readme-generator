import styles from './IconWrapper.module.scss';
import Search from '../Search/Search';
import { useState } from 'react';
import {debounce} from 'lodash';

const getImageModule = (item, str) => {
  const img = require(`../../../assets/images/${item.toLowerCase()}/${str}`);
  return img.default;
}

const IconWrapper = ({isIcon, data}) => {
  const [imageData, setImageData] = useState(data);

  function searchLists(searchVal) {
    var imgDataUpdated = {}
    for(let item in data){
      imgDataUpdated[item] = data[item].filter(val => val.title.toLowerCase().includes(searchVal.toLowerCase()))
    }
    setImageData({...imgDataUpdated});
  }

  function validURL(str) {
    var regexp = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!]))?/
    return regexp.test(str);
  }


  const copyToClipboard = (event) => {

    const trigger = event.currentTarget;

    const textToCopy = trigger.innerHTML;
    const editable = document.createElement('textarea');
    editable.textContent = textToCopy;
    document.body.appendChild(editable);
    editable.select();
    document.execCommand('Copy');
    document.body.removeChild(editable);

    trigger.classList.add(styles.flash);
    setTimeout(function() {
      trigger.classList.remove(styles.flash);
    }, 500)
  }


  const setImage = (item, {title, src}) => {
    if (isIcon) {
      return <img width="30" height="30" style={{backgroundColor: '#fff'}} alt={title} title={title} src={getImageModule(item, src)}/> 
    } else {
      return <img alt={title} title={title} src={validURL(src) ? src : getImageModule(item, src)}/>
    }
  }

  const populateLists = () => {
    const val = Object.keys(imageData).map(item => {
      return(<ul key={item} className={`${styles.wise_icon_group} ${styles.flash}`} data-display-name={item}>
        {imageData[item].map((val, index) => {
          return(
            <li key={`${val.title}_${index}`} className={styles.wise_icon} data-search-key={val.title}>
              <button className='position-relative' onClick={(e) => copyToClipboard(e)}>{setImage(item, val)}</button>
            </li>
          )
        })}
      </ul>)
    })
    return val
  }

  return (
    <section className={`${styles['wise_icon-wrapper']}`}>
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