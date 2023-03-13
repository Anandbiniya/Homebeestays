import React from 'react'
import SearchComponent from './SearchComponent'
import styles from './ParentSearch.module.css'
import ParentMain from './ParentMain'

function ParentSearch() {
  return (
    <div className={styles.searchContainer}>
      <SearchComponent/>
      <ParentMain/>
    </div>
  )
}

export default ParentSearch
