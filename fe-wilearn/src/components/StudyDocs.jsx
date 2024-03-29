import { useState } from "react";
import {
  Grid,
  Typography,
  styled,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Avatar,
  IconButton,
  Paper,
  Box,
  Tab,
  Button,

} from "@mui/material";

import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import CheckIcon from "@mui/icons-material/Check";
import BlockIcon from "@mui/icons-material/Block";

import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function StudyDocs() {
  const [uploadedFile, setUploadedFile] = useState([]);

  const handleFileChange = (event) => {
    event.target.files?.length &&
      setUploadedFile(Array.from(event.target.files));
  };

  const handleUploadNewFile = () => {
    // Gọi hàm để reset trạng thái đã upload (nếu cần)
    // setUploadedFile(null);
  };

  const [value, setValue] = useState("1");

  const isLeader = true;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const approvedFile = [
    { name: "file1.pdf" },
    { name: "file2.pdf" },
    { name: "file3.pdf" },
    { name: "file4.pdf" },
    { name: "file5.pdf" },
    { name: "file6.pdf" },
    { name: "file7.pdf" },
    { name: "file8.pdf" },
    { name: "file9.pdf" },
    { name: "file10.pdf" },
    { name: "file11.pdf" },
  ];

  const checkList = [
    { name: "file1.pdf" },
    { name: "file2.pdf" },
    { name: "file3.pdf" },
  ];

  const approvedList = approvedFile.map((file) => (
    <Paper elevation={0} key={file.name}>
      <ListItem>
        <ListItemButton
          divider
          onClick={() => {
            console.log("open");
          }}
        >
          <ListItemAvatar>
            <Avatar>
              <InsertDriveFileIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={file.name} secondary="alternate content" />

          {/* <ListItemIcon>
            <IconButton
              aria-label="deny"
              color="error"
              onClick={() => {
                console.log("deny");
              }}
            >
              <BlockIcon fontSize="large" />
            </IconButton>
          </ListItemIcon>
          <ListItemIcon>
            <IconButton
              aria-label="accept"
              color="success"
              onClick={() => {
                console.log("accept");
              }}
            >
              <CheckIcon fontSize="large" />
            </IconButton>
          </ListItemIcon> */}
        </ListItemButton>
      </ListItem>
    </Paper>
  ));

  const showcheckList = checkList.map((file) => (
    <Paper elevation={0} key={file.name}>
      <ListItem>
        <ListItemButton
          divider
          onClick={() => {
            console.log("open");
          }}
        >
          <ListItemAvatar>
            <Avatar>
              <InsertDriveFileIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={file.name} secondary="alternate content" />

          <ListItemIcon>
            <IconButton
              aria-label="deny"
              color="error"
              onClick={() => {
                console.log("deny");
              }}
            >
              <BlockIcon fontSize="large" />
            </IconButton>
          </ListItemIcon>
          <ListItemIcon>
            <IconButton
              aria-label="accept"
              color="success"
              onClick={() => {
                console.log("accept");
              }}
            >
              <CheckIcon fontSize="large" />
            </IconButton>
          </ListItemIcon>
        </ListItemButton>
      </ListItem>
    </Paper>
  ));

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{ fontWeight: "bold", textAlign: "left" }}
        >
          Study Docs
        </Typography>
      </Grid>

      {/* <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="baseline"
        padding={2}
      >
        <Grid item xs={6}>
          <Grid xs={12}>
            <Typography variant="h6">List of files</Typography>
          </Grid>

          <Grid xs={10}>
            <Paper style={{ maxHeight: "50vh", overflow: "auto" }}>
              <List>{listFiles}</List>
            </Paper>
          </Grid>
        </Grid>

        <Grid item xs={6}>
          

          <Grid item xs={12}>
            <Typography variant="h6">
              Uploaded File: {uploadedFile.name}
            </Typography>
            <DocViewer
              documents={uploadedFile.map((file) => ({
                uri: window.URL.createObjectURL(file),
                fileName: file.name,
              }))}
              pluginRenderers={DocViewerRenderers}
            />
          </Grid>
        </Grid>
      </Grid> */}
      <Grid xs={6}>
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList onChange={handleChange}>
                <Tab label="Approved" value="1" />
                {isLeader && <Tab label="Pending" value="2" />}
              </TabList>
            </Box>
            <TabPanel value="1">
              <Paper style={{ maxHeight: "70vh", overflow: "auto" }}>
                <List overflow="auto">{approvedList}</List>
              </Paper>
            </TabPanel>
            <TabPanel value="2">
              <Paper style={{ maxHeight: "70vh", overflow: "auto" }}>
                <List overflow="auto">{showcheckList}</List>
              </Paper>
            </TabPanel>
          </TabContext>
        </Box>
      </Grid>
      <Grid sx={{marginLeft: "400px"}}>
      <Button
            component="label"
            variant="contained"
            
            // startIcon={<CloudUploadIcon />}
            onClick={handleUploadNewFile}
          >
            Share File
            <VisuallyHiddenInput
              type="file"
              multiple
              onChange={handleFileChange}
            />
          </Button>
      </Grid>
    </Grid>
  );
}
