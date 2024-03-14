import { Box, Button, Grid, Modal, TextField, Typography } from '@mui/material'
import {useState} from 'react'


export default function UpdateMeetingButton() {
  const [open, setOpen] = useState(false);
  const [lessonName, setLessonName] = useState('');
  const [lessonContent, setLessonContent] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCreateMeeting = () => {
    console.log('Submitted:', {
      lessonName,
      lessonContent,
      selectedDate,
      startTime,
      endTime,
    });
  };

  return (
      <>
      <Button
          variant="contained"
          size="small"
          sx={{ 
            backgroundColor: "#E6731e",
            '&:hover': {
              backgroundColor: "#E6731e"
            },
         }}
          onClick={handleOpen}
        >
          Update
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
        }}>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{marginBottom:'10px', textAlign:'center'}}>
            Update lesson
          </Typography>
          <Box sx={{ marginTop: '1rem','& > :not(style)': { marginBottom: '1rem' } }}>
            <TextField
              label="Lesson name"
              fullWidth
              value={lessonName}
              onChange={(e) => setLessonName(e.target.value)}
            />          
            <TextField
              label="Content"
              fullWidth
              value={lessonContent}
              onChange={(e) => setLessonContent(e.target.value)}
            />
            <TextField
              label="Lesson date"
              type="date"
              fullWidth
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  label="Start time"
                  type="time"
                  fullWidth
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="End time"
                  type="time"
                  fullWidth
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
            </Grid>         
          </Box>
          <Button onClick={handleCreateMeeting}>Create</Button>
          <Button onClick={handleClose}>Close</Button>
        </Box>
      </Modal>
      </>
  )
}