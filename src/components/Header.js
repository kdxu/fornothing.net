/* @flow */
import React from 'react'
import styles from './styles.css'
import Grid from 'material-ui/Grid'
import logo from '~/assets/logo.gif'

export default () => (
  <Grid item xs={12} sm={12} md={12} lg={12} className={styles.AppHeader}>
    <img className={styles.AppIcon} src={logo} />
  </Grid>
)
