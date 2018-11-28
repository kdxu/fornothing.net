/* @flow */
import React from 'react'
import styles from './styles.css'
import Grid from '@material-ui/core/Grid'
import logo from '~/assets/logo.gif'

const Header = () => (
  <Grid item xs={12} className={styles.AppHeader}>
    <img className={styles.AppIcon} src={logo} />
  </Grid>
)

export default Header
