import styles from './Search.module.scss';

const Search = (props) => {
  return (
    <div className={styles.search_wrapper}>
      <input type="text" placeholder="search" onChange={(event) => props.onSearchHandler(event.target.value)}/>
    </div>
  )
}

export default Search;