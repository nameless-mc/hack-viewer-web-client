import { Box } from "@mui/material";
import { List, ListItem, ListItemText, Typography } from "@mui/material";
import React from 'react'
import MainLayout from "../templates/MainLayout";
import MainTitle from "../organisms/MainTitle";


const AboutPage=()=> {
  return(
  <div>
    <MainLayout>
        <Box>
            <MainTitle>Hack Viwer とは</MainTitle>
            <list>
                <listItem>
                    <listItemtText>
                    <Typography  style={{ color: 'orange' }}>
                        <Box sx={{ fontWeight:'bold',fontSize: 30, mt: 7,mb:2}}>
                            1.目的
                        </Box>
                    </Typography>
                    </listItemtText>
                    <listItemtText>
                        <Typography Box sx={{fontWeight:'bold',ml:4}}>
                            このサービスはハッカソン初心者が参加した際に感じるであろう
                            <Typography style={{ color: 'red' }}Box sx={{ fontWeight:'bold',fontSize: 20, my: 1}}>
                                「自分のチームは遅れているのではないか」
                            </Typography>
                            という不安を他チームの進捗を「見える化」することで解消することを目的としたサービスです。<br/>

                            また、イベント管理者は各チームの進捗状況を確認することにより<br/>
                            フォローやスケジュール管理がしやすくなります。                  
                        </Typography>
                    </listItemtText>
                </listItem>

                <List>
                <ListItem>
                    <ListItemText >
                        <Typography style={{ color: 'orange' }} Box sx={{fontWeight:'bold',fontSize:30,mt:7,mb:2}}>
                            2.できること
                        </Typography>

                        <Typography Box sx={{fontWeight:'bold',ml:4}}>
                        <Typography style={{color:'red'}} Box sx={{ fontWeight:'bold',fontSize: 20, mt: 5,mb:2}}>
                            参加者の方
                        </Typography>
                            ・自チームの進捗確認<br/>
                            ・他チームの進捗確認<br/>
                            ・チーム名変更
                        </Typography>
                    </ListItemText>

                    <ListItemText>
                        <Typography Box sx={{fontWeight:'bold',ml:4}}>
                        <Typography style={{color:'red'}} Box sx={{ fontWeight:'bold',fontSize: 20, mt: 18,mb:2}}>
                            イベント管理者の方
                        </Typography>
                            ・チームの追加・編集・削除<br/>
                            ・イベント名の編集・削除<br/>
                            ・イベント概要の編集・削除
                        </Typography>
                    </ListItemText>
                    </ListItem>
                </List>
            </list>
        </Box>
    </MainLayout>
   </div>
  )
};

export default AboutPage;