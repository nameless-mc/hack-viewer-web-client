import { Box } from "@mui/material";
import { Button, FormControl, FormControlLabel, List, ListItem, ListItemText, Radio, RadioGroup, TextField, Typography } from "@mui/material";
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
                            <Typography style={{ color: 'red' }}Box sx={{ fontWeight:'bold',fontSize: 20, my: 2}}>
                                「他のチームはどのくらい進んでいるのか」
                            </Typography>
                            という不安を解消することを目的としたサービスです。<br/><br/>
                            また、イベント主催者は各チームの進捗状況を確認することにより<br/>
                            フォローやスケジュール管理がしやすくなります。                  
                        </Typography>
                    </listItemtText>
                </listItem>

                <listItemt>
                    <ListItemText >
                        <Typography style={{ color: 'orange' }} Box sx={{fontWeight:'bold',fontSize:30,mt:7,mb:2}}>
                            2.できること
                        </Typography>
                        <Typography Box sx={{fontWeight:'bold',ml:4}}>
                            ・自チームの進捗確認<br/>
                            ・他チームの進捗確認<br/>
                            ・チーム名変更<br/>
                        </Typography>
                    </ListItemText>
                </listItemt>

                <listItem>
                    <listItemText>
                        <Typography style={{ color: 'orange' }} Box sx={{fontSize:30,mt:7}}>
                            3.開発チーム
                        </Typography>
                        <Typography Box sx={{fontWeight:'bold',fontSize:20,ml:4}}>
                            チーム名:28時間マラソン（446）
                        </Typography>
                    </listItemText>
                </listItem>

            </list>
        </Box>
    </MainLayout>
   </div>
  )
};

export default AboutPage;