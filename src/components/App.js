/* @flow */
import React from 'react'
import Header from '~/components/Header'
import Content from '~/components/Content'
import styles from './styles.css'

export default function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Content />
    </div>
  )
}
