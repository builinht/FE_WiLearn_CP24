import { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, TextField, DialogActions, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

export default function CreateGroup() {
    const [openDialog, setOpenDialog] = useState(false);
    const [groupName, setGroupName] = useState('');
    const [subject, setSubject] = useState('');

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    const handleCreateGroup = () => {
        console.log('Creating group:', { groupName, subject });
        setOpenDialog(false);
    };

    return (
        <>
            <Button style={{
            textAlign: "center",
            fontSize: "14px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            marginLeft: "900px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"}}
            onClick={() => setOpenDialog(true)}>
               + Create group
            </Button>

            <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="xs" fullWidth>
                <DialogTitle>Create New Group</DialogTitle>
                <DialogContent>
                    <TextField
                        label="Group Name"
                        fullWidth
                        sx={{ marginTop: '10px' }}
                        value={groupName}
                        onChange={(e) => setGroupName(e.target.value)}
                    />
                    <FormControl fullWidth sx={{ marginTop: '20px' }}>
                        <InputLabel htmlFor="subject-label">Subject</InputLabel>
                        <Select
                            fullWidth
                            labelId="subject-label"
                            id="demo-simple-select"
                            value={subject}
                            label="Subject"
                            onChange={(e) => setSubject(e.target.value)}
                        >
                            <MenuItem value="React">React</MenuItem>
                            <MenuItem value="Python">Python</MenuItem>
                            <MenuItem value="Java">Java</MenuItem>
                        </Select>
                    </FormControl>
                </DialogContent>
                <DialogActions style={{ padding: '16px' }}>
                    <Button onClick={handleCloseDialog}>
                        Cancel
                    </Button>
                    <Button onClick={handleCreateGroup}>
                        Create
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
