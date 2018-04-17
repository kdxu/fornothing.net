/* @flow */
import React from 'react'
import Header from '~/components/Header'
import Content from '~/components/Content'
import Grid from 'material-ui/Grid'

export default function App() {
  return (
    <Grid container spacing={16}>
      <Header />
      <Content />
    </Grid>
  )
}
