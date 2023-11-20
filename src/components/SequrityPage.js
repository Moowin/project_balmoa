import React, { useState } from 'react';
import { Paper, Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';

const SequrityPage = () => {
  const times = [
    '09:00~10:00', '10:00~11:00', '11:00~12:00', '12:00~13:00',
    '13:00~14:00', '14:00~15:00', '15:00~16:00', '16:00~17:00',
    '17:00~18:00', '18:00~19:00', '19:00~20:00', '20:00~21:00',
    '21:00~22:00'
  ];

  // 예약자 정보
  const reservationData = [
    { department: '스마트소프트웨어학과', name: '김민우', phoneNumber: '010-5059-4036', reservTime: '18:00~19:00', studentNumber: '21960009', image: '링크 또는 이미지 데이터' },
    // 다른 예약자 정보들...
  ];

  // 선택된 예약자의 정보 및 모달 상태
  const [selectedReservation, setSelectedReservation] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  // 자물쇠 확인 버튼 클릭 시 모달 열기
  const handleLockClick = (reservation) => {
    setSelectedReservation(reservation);
    setOpenModal(true);
  };

  // 모달 닫기
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1, textAlign: 'center', fontWeight: 'bold' }}>
            풋살장 예약 관리
          </Typography>
        </Toolbar>
      </AppBar>
      <Container style={{}}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>학과</TableCell>
                <TableCell>이름</TableCell>
                <TableCell>전화번호</TableCell>
                <TableCell>시간</TableCell>
                <TableCell>학번</TableCell>
                <TableCell>자물쇠 확인</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {times.map((time, index) => {
                // 예약한 사용자 찾기
                const reservedUser = reservationData.find(user => user.reservTime === time);

                return (
                  <TableRow key={index}>
                    <TableCell>{reservedUser?.department}</TableCell>
                    <TableCell>{reservedUser?.name}</TableCell>
                    <TableCell>{reservedUser?.phoneNumber}</TableCell>
                    <TableCell>{time}</TableCell>
                    <TableCell>{reservedUser?.studentNumber}</TableCell>
                    <TableCell>
                      <Button onClick={() => handleLockClick(reservedUser)}>
                        자물쇠 확인
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>

      <Dialog open={openModal} onClose={handleCloseModal}>
        <DialogTitle>자물쇠 확인</DialogTitle>
        <DialogContent>
          <img src={selectedReservation?.image} alt="자물쇠 확인" style={{ maxWidth: '100%' }} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal}>닫기</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default SequrityPage;
