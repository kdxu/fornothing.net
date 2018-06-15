/* @flow */
import React from 'react'
import styles from './styles.css'
import Avatar from 'material-ui/Avatar'
import Card, { CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import Grid from 'material-ui/Grid'
import Code from '@material-ui/icons/Code'
import Create from '@material-ui/icons/Create'
import avatar0 from '~/assets/avatars/avatar0.png'
import avatar1 from '~/assets/avatars/avatar1.png'
import avatar2 from '~/assets/avatars/avatar2.png'
import avatar3 from '~/assets/avatars/avatar3.png'
import avatar4 from '~/assets/avatars/avatar4.png'
import avatar5 from '~/assets/avatars/avatar5.png'
import avatar6 from '~/assets/avatars/avatar6.png'
import avatar7 from '~/assets/avatars/avatar7.png'
import avatar8 from '~/assets/avatars/avatar8.png'

const avatars = [
  avatar0,
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  avatar6,
  avatar7,
  avatar8
]

export default () => (
  <Grid className={styles.Content} item xs={12} sm={12} md={12} lg={12}>
    <Card style={{ minHeight: 100 }}>
      <CardContent>
        <Grid container spacing={16}>
          <Grid item xs={12} md={12}>
            <Avatar
              style={{ width: 200, height: 200, margin: 10 }}
              src={avatars[Math.floor(Math.random() * avatars.length)]}
            />
            <Typography variant="headline" component="h3">
              @kdxu
            </Typography>
          </Grid>
          <Grid item xs={12}>
            🎂 1992/02/18
          </Grid>

          <Grid item xs={12}>
            <Button variant="raised" href="https://github.com/kdxu">
              <Code />GitHub
            </Button>
            <Button
              style={{ margin: 10 }}
              variant="raised"
              href="https://medium.com/@kdxu"
            >
              <Create />Blog (medium)
            </Button>
            <Button
              style={{ margin: 10 }}
              variant="raised"
              href="https://devblog.fornothing.net"
            >
              <Create />Blog (tech memo)
            </Button>

          </Grid>
        </Grid>
      </CardContent>
    </Card>
    <Card>
      <CardContent>
        <Grid container spacing={16}>
          <Grid item xs={12} md={12}>
            <Typography variant="headline" component="h4">
              職歴
            </Typography>
            <ul>
              <li>2016年4月: 株式会社リクルートホールディングス 入社</li>
              <ul>
                <li>英語学習支援サービスサーバーサイド開発(Scala)</li>
                <li>英語学習支援サービスフロントエンド開発(AngularJS)</li>
                <li>英語学習支援サービスAndroid開発(Java)</li>
              </ul>
              <li>2016年10月: 株式会社リクルートホールディングス 退社</li>
              <li>2016年10月: 独立(自営業)</li>
              <ul>
                <li>就職活動支援サービスネイティブアプリ開発(Swift/Kotlin)</li>
                <li>個人間送金サービスフロントエンド開発(CycleJS)</li>
                <li>
                  タブレットを用いた子供向け知育アプリ開発(Ruby on Rails/Unity)
                </li>
                <li>経理向けWebサービス開発(AWS/Nginx/Django/React)</li>
                <li>
                  ソーシャルゲーム基盤システム開発(AWS/Nginx/Elixir/Erlang)
                </li>
                <li>
                  ソーシャルゲームバックエンド開発(AWS/Nginx_OpenResty/Elixir)
                </li>
                <li>NDA</li>
              </ul>
            </ul>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
    <Card>
      <CardContent>
        <Grid container spacing={16}>
          <Grid item xs={12} md={12}>
            <Typography variant="headline" component="h4">
              学歴
            </Typography>
            <ul>
              <li>2010年: 鳥取県立米子東高等学校 生命科学コース 卒</li>
              <li>2010年: お茶の水女子大学 理学部情報科学科 入学</li>
              <li>2014年: お茶の水女子大学 理学部情報科学科 卒</li>
              <li>
                2014年: お茶の水女子大学大学院 人間文化創成科学研究科 理学専攻
                情報科学コース 入学
              </li>
              <li>
                2016年: お茶の水女子大学大学院 人間文化創成科学研究科 理学専攻
                情報科学コース 修了
              </li>
              <ul>
                <li>
                  専攻: 定理証明支援系を用いたコンパイラの定式化, 依存型理論
                </li>
              </ul>
            </ul>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
    <div style={{ margin: 5 }}>
      <Typography component="p">kyoko.kadowaki [at] gmail.com</Typography>
    </div>
  </Grid>
)
