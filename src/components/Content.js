/* @flow */
import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid'
import Code from '@material-ui/icons/Code'
import Create from '@material-ui/icons/Create'
import avatar from '~/assets/avatar.jpg'
import Link from '@material-ui/core/Link';

const Content = () => (
  <Grid container spacing={1}>
    <Card style={{ minHeight: 100, marginBottom: 10, width: '90%' }}>
      <CardContent>
            <Avatar
              style={{ width: 200, height: 200, margin: 10, aListItemgnSelf: 'center' }}
              src={avatar}
            />
            <Typography variant="h4" style={{ marginBottom: 10 }}>
              @kdxu
            </Typography>
            <hr/>
      <CardActions>
              <Button href="https://github.com/kdxu" size="small" color="primary">
                <Code/>
              GitHub
            </Button>
            <Button
              href="https://devblog.fornothing.net"
              size="small"
              color="primary"
            >
                <Create/>
              Memo
            </Button>
      </CardActions>
      </CardContent>
    </Card>
    <Card style={{ minHeight: 100, marginBottom: 10, width: '90%' }}>
      <CardContent>
        <Grid container spacing={10}>
          <Grid item xs={12} md={12}>
            <Typography variant="h4" component="h4">
              職歴
            </Typography>
            <ul>
              <ListItem style={{ fontWeight: 'bold'}}>2016年4月: 株式会社リクルートホールディングス 入社</ListItem>
              <ListItem style={{ fontWeight: 'bold'}}>2016年10月: 株式会社リクルートホールディングス 退社</ListItem>
              <ListItem style={{ fontWeight: 'bold'}}>2016年10月: 独立(自営業)</ListItem>
            </ul>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
    <Card style={{ minHeight: 100, marginBottom: 10, width: '90%' }}>
      <CardContent>
        <Grid container spacing={10}>
          <Grid item xs={12} md={12}>
            <Typography variant="h4" component="h4">
              OSS 関連
            </Typography>
            <ul>
              <ListItem>
                <Link href="https://github.com/OpenAyame">
                  OpenAyame プロジェクト
                </Link>
              </ListItem>
            </ul>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
    <Card style={{ minHeight: 100, marginBottom: 10, width: '90%' }}>
      <CardContent>
        <Grid container spacing={10}>
          <Grid item xs={12} md={12}>
            <Typography variant="h4" component="h4">
              技術系のスキル
            </Typography>
            <ul>
              <ListItem style={{ fontWeight: 'bold'}}>言語</ListItem>
            <ul>
                <ListItem>
                  C, C#, C++, Objective-C, Swift, OCaml, Agda, Python, Erlang, Elixir,
                  JavaScript, Ruby, Golang
                </ListItem>
              </ul>
                <ListItem style={{ fontWeight: 'bold'}}>ネイティブ開発</ListItem>
              <ul>
                <ListItem>iOS/Android, React Native, Unity</ListItem>
              </ul>
                <ListItem style={{ fontWeight: 'bold'}}>その他</ListItem>
              <ul>
                <ListItem>AWS, GCP, Ansible</ListItem>
                <ListItem>WebRTC, それにまつわるネットワーク関連技術</ListItem>
                <ListItem>
                  Adobe XD, Adobe Illustrator, Adobe After Effects
                </ListItem>
              </ul>
            </ul>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
    <Card style={{ minHeight: 100, marginBottom: 10, width: '90%' }}>
      <CardContent>
        <Grid container spacing={10}>
          <Grid item xs={12} md={12}>
            <Typography variant="h4" component="h4">
              学歴
            </Typography>
            <ul>
              <ListItem>2010年: 鳥取県立米子東高等学校 生命科学コース 卒</ListItem>
              <ListItem>2010年: お茶の水女子大学 理学部情報科学科 入学</ListItem>
              <ListItem>2014年: お茶の水女子大学 理学部情報科学科 卒</ListItem>
              <ListItem>
                2014年: お茶の水女子大学大学院 人間文化創成科学研究科 理学専攻
                情報科学コース 入学
              </ListItem>
              <ListItem>
                2016年: お茶の水女子大学大学院 人間文化創成科学研究科 理学専攻
                情報科学コース 修了
              </ListItem>
              <ul>
                <ListItem>
                  専攻: 定理証明支援系を用いたコンパイラの定式化, 依存型理論
                </ListItem>
              </ul>
            </ul>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
    <div style={{ margin: 5, padding: 10 }}>
      <Typography component="p">kyoko.kadowaki [at] gmail.com</Typography>
    </div>
  </Grid>
)

export default Content
