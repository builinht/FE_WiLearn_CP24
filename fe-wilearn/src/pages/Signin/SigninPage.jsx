import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";
import Alert from "@mui/material/Alert";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import { useNavigate } from "react-router-dom";

import { useState } from "react";
const defaultTheme = createTheme();
import {
  // useGetPokemonByNameQuery,
  usePostLoginMutation,
} from "../../app/appApi";

export default function SignIn() {
  const [username, setUsername] = useState("student1");
  const [password, setPassword] = useState("123456789");
  const [rememberMe, setRememberMe] = useState(false);

  const navigate = useNavigate();

  // const { data, error, isLoading } = useGetPokemonByNameQuery("bulbasaur");
  const [login, { data, isError, error, isLoading }] = usePostLoginMutation();

  // const handleLogin = () => {
  //   // Kiểm tra thông tin đăng nhập, ví dụ: nếu username và password là 'admin'
  //   if (username === "user@gmail.com" && password === "123456") {
  //     // Đăng nhập thành công, chuyển hướng đến trang Home
  //     navigate("/home");
  //   } else {
  //     alert("Đăng nhập không thành công. Thử lại.");
  //   }
  // };

  const loginRedux = () => {
    const formdata = {
      usernameOrEmail: username,
      password: password,
      rememberMe: false,
    };

    login(formdata)
      .unwrap()
      .then((payload) => {
        navigate("/home");
        console.log(payload);
      })
      .catch((error) => {
        console.log(error);
        alert("Đăng nhập không thành công. Thử lại.");
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get("email"),
    //   password: data.get("password"),
    //   rememberMe: false,
    // });
  };

  return (
    <Grid
      style={{
        backgroundImage: `url(https://visme.co/blog/wp-content/uploads/2017/07/50-Beautiful-and-Minimalist-Presentation-Backgrounds-042.jpg)`,
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              sx={{ m: 1, bgcolor: "secondary.main", marginTop: "100px" }}
            >
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={password}
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="RememberMe"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  backgroundImage: "linear-gradient(to left, #00b4db, #0083b0)",
                }}
                // onClick={handleLogin}
                onClick={loginRedux}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/register" variant="body2">
                    {"Don't have an account? Register"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </Grid>
  );
}
