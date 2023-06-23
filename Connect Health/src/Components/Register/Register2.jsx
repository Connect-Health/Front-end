import React, { useState } from 'react';
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
import { AiOutlineArrowLeft } from 'react-icons/ai';

function AdditionalInputs() {
  return (
    <>
    
      <Container component="main" maxWidth="xs">
        <Grid container spacing={2} sx={{ mt: 2 }} >
          <Grid item xs={12} className="flex gap-4">
            {/* Adicione aqui os inputs adicionais que deseja exibir */}
            <TextField
              required
              fullWidth
              name="cep"
              label="CEP"
              type="text"
              id="cep"
              autoComplete="cep"
              inputProps={{
                maxLength: 10
              }}
            />
            <TextField
              required
              fullWidth
              name="logradouro"
              label="Logradouro"
              type="text"
              id="logradouro"
              autoComplete="logradouro"
            />
          </Grid>
          <Grid item xs={12} className="flex gap-4">

          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} className="flex gap-4">
            {/* Adicione aqui os inputs adicionais que deseja exibir */}
            <TextField
              required
              fullWidth
              name="bairro"
              label="Bairro"
              type="text"
              id="bairro"
              autoComplete="bairro"
              inputProps={{
                maxLength: 10
              }}
            />
            <TextField
              required
              fullWidth
              name="cidade"
              label="Cidade"
              type="text"
              id="cidade"
              autoComplete="cidade"
            />
          </Grid>
          <Grid item xs={12} className="flex gap-4">

          </Grid>
        </Grid>
      </Container>



    </>
  );
}



export default function Register2() {
  const [currentStep, setCurrentStep] = useState(1);
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [genero, setGenero] = useState(1);


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });

    if (currentStep === 1) {
      setCurrentStep(2); // Avançar para a próxima seção
    } else {
      // Lógica de envio final do formulário
    }
  };

  const handleGoBack = () => {
    setCurrentStep(1); // Voltar para a seção anterior
  };

  return (
    <ThemeProvider theme={createTheme()}>
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
          <Avatar className="mb-3" sx={{ bgcolor: 'primary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Registre-se!
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              {currentStep === 1 && (
                <>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="given-name"
                      name="firstName"
                      required
                      fullWidth
                      id="firstName"
                      label="Nome"
                      value={nome}
                      onChange={(texto) => setNome(texto.target.value)}
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
                      value={sobrenome}
                      onChange={(texto) => setSobrenome(texto.target.value)}
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
                      value={email}
                      onChange={(texto) => setEmail(texto.target.value)}
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12} className="flex gap-4">
                    <TextField
                      required
                      fullWidth
                      name="password"
                      label="Senha"
                      type="password"
                      id="password"
                      value={senha}
                      onChange={(texto) => setSenha(texto.target.value)}
                      autoComplete="new-password"
                    />
                    <TextField
                      required
                      fullWidth
                      name="cpf"
                      label="CPF"
                      value={cpf}
                      onChange={(texto) => setCpf(texto.target.value)}
                      type="text"
                      id="cpf"
                      autoComplete="cpf"
                      inputProps={{
                        maxLength: 14,
                        pattern: '\\d{3}.\\d{3}.\\d{3}-\\d{2}',
                        title: 'Digite um CPF válido no formato XXX.XXX.XXX-XX',
                        onChange: (event) => {
                          const { value } = event.target;
                          const maskedCPF = value
                            .replace(/\D/g, '')
                            .replace(/(\d{3})(\d)/, '$1.$2')
                            .replace(/(\d{3})(\d)/, '$1.$2')
                            .replace(/(\d{3})(\d{2})$/, '$1-$2');
                          event.target.value = maskedCPF;
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} className="flex gap-4">
                    <TextField required fullWidth name="data" type="date" id="data" autoComplete="data" value={dataNascimento} onChange={(texto) => setDataNascimento(texto.target.value)} />
                    <TextField
                      required
                      fullWidth
                      name="telefone"
                      label="Telefone"
                      type="tel"
                      id="telefone"
                      value={telefone}
                      onChange={(texto) => setTelefone(texto.target.value)}
                      autoComplete="telefone"
                      inputProps={{
                        maxLength: 11,
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} className="flex gap-4">
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Gênero</InputLabel>
                      <Select labelId="demo-simple-select-label" id="demo-simple-select" label="Gênero" value={genero} onChange={(texto) => setGenero(texto.target.value)}>
                        <MenuItem value={1}>Masculino</MenuItem>
                        <MenuItem value={2}>Feminino</MenuItem>
                        <MenuItem value={3}>Outros</MenuItem>
                        <MenuItem value={4}>Prefiro não informar</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </>
              )}

              {currentStep === 2 && (
                <Grid item xs={12}>
                  <Button variant='outlined' onClick={handleGoBack}>
                    <AiOutlineArrowLeft className='text-xl' />
                  </Button>
                </Grid>
              )}

              {currentStep === 2 && <AdditionalInputs />}


              <Grid item xs={12}>
                <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                  {currentStep === 1 ? 'Continuar' : 'Finalizar'}
                </Button>
              </Grid>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/loginprof" variant="body2">
                    Já possui uma conta? Faça seu Login!
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
