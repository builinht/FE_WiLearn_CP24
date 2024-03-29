import { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { MenuItem } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('');
  const [field, setField] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      // Thực hiện logic đăng ký tại đây
      // Ví dụ: kiểm tra và lưu thông tin tài khoản

      // Giả sử có một hàm API đăng ký trả về một đối tượng người dùng
      const response = await registerUser(username, password);

      // Kiểm tra nếu đăng ký thành công
      if (response.success) {
        alert('Đăng ký thành công!');
        // Chuyển hướng đến trang đăng nhập
        navigate('/signin');
      } else {
        alert('Đăng ký không thành công. Thử lại.');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert('Có lỗi xảy ra. Thử lại sau.');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <Grid style={{backgroundImage: `url(https://visme.co/blog/wp-content/uploads/2017/07/50-Beautiful-and-Minimalist-Presentation-Backgrounds-042.jpg)`, backgroundSize: 'cover', height: '100vh'}}>
    <ThemeProvider theme={createTheme()}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5" sx={{marginTop:'15px'}}>
            Register
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
          <Grid container spacing={0.5}>
                <Grid item xs={12} sm={6}>
                    <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    onChange={(e) => setUsername(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    id="confirmPassword"
                    autoComplete="new-password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="phone"
                    label="Phone"
                    type="tel"
                    id="phone"
                    autoComplete="tel"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="dob"
                    label="Date of Birth"
                    type="date"
                    id="dob"
                    autoComplete="bday"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => setDob(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    select
                    margin="normal"
                    required
                    fullWidth
                    name="field"
                    label="Role"
                    value={field}
                    onChange={(e) => setField(e.target.value)}
                  >
                    <MenuItem value="student">Student</MenuItem>
                    <MenuItem value="worker">Worker</MenuItem>
                  </TextField>
                </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundImage: "linear-gradient(to left, #00b4db, #0083b0)" }}
              onClick={handleRegister}
            >
              Register
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signin" variant="body2">
                  Already have an account? Sign In
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    </Grid>
  );

 // Giả định hàm API đăng ký
async function registerUser(username, password) {
    try {
      // Gửi yêu cầu đăng ký đến máy chủ hoặc dịch vụ đăng ký
      const response = await fetch('https://example.com/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
          confirmPassword: confirmPassword,
          phone: phone,
          dob: dob,
          field: field,

        }),
      });
  
      // Kiểm tra nếu yêu cầu đăng ký thành công (status code 200-299)
      if (response.ok) {
        // Phân tích kết quả JSON
        const result = await response.json();
  
        // Trả về kết quả từ máy chủ (ví dụ: thông tin người dùng mới)
        return result;
      } else {
        // Xử lý lỗi nếu yêu cầu đăng ký không thành công
        console.error('Đăng ký không thành công:', response.statusText);
        throw new Error('Đăng ký không thành công');
      }
    } catch (error) {
      console.error('Lỗi khi gửi yêu cầu đăng ký:', error);
      throw new Error('Lỗi khi gửi yêu cầu đăng ký');
    }
  }  
}

export default Register;