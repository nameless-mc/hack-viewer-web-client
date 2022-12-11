import React from 'react'
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import MainLayout from "../templates/MainLayout";
import MainTitle from "../organisms/MainTitle";

const HowtoPage = () => {
  return (
    <div>
        <MainLayout>
            <Box>
                <MainTitle>使い方</MainTitle>
                <list>
                    <listItem>
                        <Typography style={{color:'red'}} Box sx={{ fontWeight:'bold',fontSize: 30, mt: 7,mb:2}}>
                            参加者の方へ
                        </Typography>
                        <Typography Box sx={{fontWeight:'bold',fontSize:20,ml:3,my:5}}>
                            <Box sx={{color:'orange'}}>
                                1.イベントへの参加方法
                            </Box>
                            <Box sx={{fontSize:17,ml:7,mt:2}}>
                                (1)ホーム画面でイベントID入力<br/>
                                (2)送信ボタンを押す<br/>
                                (3)イベントページに遷移
                            </Box>
                        </Typography>
                        <Typography Box sx={{fontWeight:'bold',fontSize:20,ml:3,my:5}}>
                            <Box style={{color:'orange'}}>
                                2.進捗確認更新
                            </Box>
                            <Box sx={{fontSize:17,ml:7,mt:2}}>
                            (1)イベントページで自チームの「進捗をPUSHする」ボタンを押す<br/>
                            (2)チーム管理ページに遷移<br/>
                            (3)進捗ラジオボタンを進める<br/>
                            (4)送信ボタンを押す
                            </Box>
                        </Typography>
                        
                        <Typography style={{color:'red'}} Box sx={{fontWeight:'bold',fontSize: 30, mt: 7,mb:2}}>
                            イベント管理者の方へ
                        </Typography>
                        <Typography style={{color:''}} Box sx={{fontWeight:'bold',fontSize:20,ml:3,my:3}}>
                            1.イベントページ最下部より管理者ページへアクセス<br/>
                            2.下記の編集が行えます
                        </Typography>
                            <Box sx={{fontWeight:'bold',Size:17,ml:7,mt:2}}>
                                (1)チームの追加・編集・削除<br/>
                                (2)イベント名の編集・削除<br/>
                                (3)イベント概要の編集・削除
                            </Box>
                        
                    </listItem>
                </list>
            </Box>
            
        </MainLayout>
    </div>
  )
}

export default HowtoPage