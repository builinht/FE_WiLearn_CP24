import { useState } from 'react';
import {
  Grid,
  Typography,
  Stack,
  Button,
  Avatar,
  Box,
  Input,
} from "@mui/material";
import {
  FormContainer,
  TextFieldElement,
  PasswordElement,
  PasswordRepeatElement,
  DatePickerElement,
} from "react-hook-form-mui";
import dayjs from "dayjs";

export default function UserProfile() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  return (
    <Grid
      container
      direction={"row"}
      paddingLeft={25}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
    >
      <Grid item xs={12}>
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", textAlign: "start" }}
        >
          Profile
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '10px' }}>
          <Typography variant="body1" marginBottom={1}>Avatar</Typography>
          <Avatar
            style={{ width: '150px', height: '150px' }}
            src={selectedFile ? URL.createObjectURL(selectedFile) : ''}
          />
          <Input
            accept="image/*"
            type="file"
            id="avatar-upload"
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
          <label htmlFor="avatar-upload">
            <Button
              variant="contained"
              component="span"
              style={{
                marginTop: '16px',
                padding: '2px 5px',
                backgroundColor: 'transparent',
                color: '#000',
                border: '1px solid #000',
                fontSize: '12px',
              }}
            >
              Choose File
            </Button>
          </label>
          {selectedFile ? (
            <Typography variant="body2" marginTop="10px">Local avatar selected: {selectedFile.name}</Typography>
          ) : (
            <Typography variant="body2" marginTop="10px">No local avatar is set. Use the upload field to add a local avatar.</Typography>
          )}
        </Box>
      </Grid>
      
      <Grid item xs={3}>
        <Typography variant="h5" textAlign={"left"}>
          Update information
        </Typography>
        <FormContainer
          defaultValues={{
            full_name: "Thuy Linh",
            phone_number: "0123456789",
            birth_date: dayjs(),
            email: "linhbt@gmail.com",
          }}
          onSuccess={(data) => console.log(data)}
        >
          <Stack spacing={2} maxWidth={500} paddingTop={2}>
            <TextFieldElement
              name="full_name"
              label="Full name"
              required
              margin="dense"
            />
            <TextFieldElement
              name="phone_number"
              label="Phone number"
              required
              margin="dense"
            />
            <TextFieldElement
              name="email"
              label="Email"
              required
              margin="dense"
            />
            <DatePickerElement label="Birth date" name="birth_date" required />
            <Button type="submit">Submit</Button>
          </Stack>
        </FormContainer>
      </Grid>
      
      <Grid item xs={3} marginLeft={5}>
        <Typography variant="h5" textAlign={"left"}>
          Change password
        </Typography>
        <FormContainer
          defaultValues={{
            old_password: "",
            new_password: "",
            confirm_password: "",
          }}
          onSuccess={(data) => console.log(data)}
        >
          <Stack spacing={2} maxWidth={500} paddingTop={2}>
            <PasswordElement
              margin={"dense"}
              label={"Current password"}
              required
              name={"old_password"}
            />
            <PasswordElement
              margin={"dense"}
              label={"New password"}
              required
              type="password"
              name={"new_password"}
            />
            <PasswordRepeatElement
              passwordFieldName={"new-password"}
              name={"password_repeat"}
              margin={"dense"}
              label={"Repeat Password"}
              required
            />
            <Button type="submit">Submit</Button>
          </Stack>
        </FormContainer>
      </Grid>
    </Grid>
  );
}
