/* @flow */
import React from 'react'
import styles from './styles.css'
import Avatar from 'material-ui/Avatar'
import avatar from '~/assets/avatar.png'

export default () => (
  <header className={styles.AppHeader}>
    <div className={styles.AppIcon}>
      <Avatar style={{ width: 80, height: 80 }} src={avatar} />
    </div>
    <h1>kdxu.fornothing.net</h1>
  </header>
)
