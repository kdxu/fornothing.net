/* @flow */
import React from 'react'
import styles from './styles.css'
import Avatar from 'material-ui/Avatar'
import Card, { CardActions, CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import Grid from 'material-ui/Grid'
import Code from '@material-ui/icons/Code'
import Create from '@material-ui/icons/Create'
import avatar from '~/assets/avatar.png'

export default () => (
  <Grid className={styles.Content} item xs={12} sm={12} md={12} lg={12}>
    <Card style={{ minHeight: 100 }}>
      <CardContent>
        <Avatar style={{ width: 100, height: 100 }} src={avatar} />
        <Typography variant="headline" component="h3">
          Kyoko Kadowaki(門脇香子) or @kdxu
        </Typography>
        <Typography component="p">kyoko.kadowaki [at] gmail.com</Typography>
      </CardContent>
      <CardActions style={{ display: 'flex' }}>
        <Button size="small" variant="raised" href="https://github.com/kdxu">
          <Code />GitHub
        </Button>
        <Button
          style={{ marginLeft: 20 }}
          size="small"
          variant="raised"
          href="https://medium.com/@kdxu"
        >
          <Create />Blog (medium)
        </Button>
      </CardActions>
    </Card>
  </Grid>
)
