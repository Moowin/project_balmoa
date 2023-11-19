import React from 'react';
import { Paper, Table, TableContainer, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import { AppBar, Toolbar, IconButton, Typography, Container, Button } from '@mui/material';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const data = [
  { department: '컴퓨터공학과', name: '홍길동', phoneNumber: '010-1234-5678', usageTime: '9:00~22:00', studentNumber: '20210001', remark: '비고1' },
  { department: '전자공학과', name: '이순신', phoneNumber: '010-5678-1234', usageTime: '9:00~22:00', studentNumber: '20210002', remark: '비고2' },
  // ... 다른 데이터 추가
];

const SequrityPage = () => {
  return (
    <div>
        <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <AddCircleIcon />
                    </IconButton>
                    {/* <IconButton color = "inherit" onClick={goToSequrity}>
                        <SecurityIcon/>
                    </IconButton> */}
                    <Typography variant="h6" style={{ flexGrow: 1, textAlign:'center', fontWeight:'bold' }}>
                    발모아
                    </Typography>
                    <IconButton color = "inherit">
                        <CameraAltIcon/>
                    </IconButton>
                    <IconButton color="inherit">
                        <AccountCircleIcon />
                    </IconButton>
                </Toolbar>
        </AppBar>
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                <TableRow>
                    <TableCell>사용부서</TableCell>
                    <TableCell>이름</TableCell>
                    <TableCell>전화번호</TableCell>
                    <TableCell>사용시간</TableCell>
                    <TableCell>학번</TableCell>
                    <TableCell>자물쇠 확인</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell>09:00~10:00</TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                </TableBody>
                <TableBody>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell>10:00~11:00</TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                </TableBody>
                <TableBody>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell>11:00~12:00</TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                </TableBody>
                <TableBody>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell>12:00~13:00</TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                </TableBody>
                <TableBody>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell>13:00~14:00</TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                </TableBody>
                <TableBody>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell>14:00~15:00</TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                </TableBody>
                <TableBody>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell>15:00~16:00</TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                </TableBody>
                <TableBody>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell>16:00~17:00</TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                </TableBody>
                <TableBody>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell>17:00~18:00</TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                </TableBody>
                <TableBody>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell>18:00~19:00</TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                </TableBody>
                <TableBody>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell>19:00~20:00</TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                </TableBody>
                <TableBody>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell>20:00~21:00</TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                </TableBody>
                <TableBody>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell>21:00~22:00</TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  );
};

export default SequrityPage;
