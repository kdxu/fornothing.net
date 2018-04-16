/* @flow */
import React from 'react'
import styles from './styles.css'
import Card, { CardActions, CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'

export default () => (
  <div className={styles.Content}>
    <h2> About </h2>
    <Card style={{ minHeight: 100, padding: 20 }}>
      <CardContent>
        <Typography variant="headline" component="h3">
          Kyoko Kadowaki(門脇香子)
        </Typography>
        <Typography component="p">kyoko.kadowaki [at] gmail.com</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href="https://github.com/kdxu">
          GitHub
        </Button>
      </CardActions>
    </Card>
  </div>
)
