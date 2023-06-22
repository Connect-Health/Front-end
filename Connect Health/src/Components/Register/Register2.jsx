import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Register2() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar className='mb-3' sx={{bgcolor: 'primary.main' }}>
            
          </Avatar>
          <Typography component="h1" variant="h5">
            Registre-se!
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="Nome"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Sobrenome"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12} className='flex gap-4'>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Senha"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
                <TextField
                  required
                  fullWidth
                  name="cpf"
                  label="CPF"
                  type="text"
                  id="cpf"
                  autoComplete="cpf"
                  inputProps={{
                    maxLength: 14,
                    pattern: "\\d{3}.\\d{3}.\\d{3}-\\d{2}",
                    title: "Digite um CPF válido no formato XXX.XXX.XXX-XX",
                    onChange: (event) => {
                      const { value } = event.target;
                      const maskedCPF = value
                        .replace(/\D/g, '') // Remove todos os caracteres não numéricos
                        .replace(/(\d{3})(\d)/, '$1.$2') // Adiciona um ponto após os primeiros três dígitos
                        .replace(/(\d{3})(\d)/, '$1.$2') // Adiciona um ponto após os próximos três dígitos
                        .replace(/(\d{3})(\d{2})$/, '$1-$2'); // Adiciona um hífen antes dos últimos dois dígitos
                      event.target.value = maskedCPF;
                    }
                  }}
                />
              </Grid>
              <Grid item xs={12} className='flex gap-4'>
                <TextField
                  required
                  fullWidth
                  name="data"
                  type="date"
                  id="data"
                  autoComplete="data"
                />
                <TextField
                  required
                  fullWidth
                  name="telefone"
                  label="Telefone"
                  type="tel"
                  id="telefone"
                  autoComplete="telefone"
                  inputProps={{
                    maxLength: 11
                  }}
                />

              </Grid>
              <Grid item xs={12} className='flex gap-4'>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Genero</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"

                    label="Genero"
                  >
                    <MenuItem value={1}>Masculino</MenuItem>
                    <MenuItem value={2}>Feminino</MenuItem>
                    <MenuItem value={3}>Outros</MenuItem>
                    <MenuItem value={4}>Prefiro não informar</MenuItem>
                  </Select>
                </FormControl>
                

              </Grid>
            </Grid>



            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Continuar
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/loginprof" variant="body2">
                 Já possui uma conta? Faça seu Login!
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}