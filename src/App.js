import React, {  useState } from "react";
import axios from "axios";
//import logo from './logo.svg';
import AppBar from '@mui/material/AppBar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="#">
        FullTimeForce Test
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

function App() {
  const main_url = "http://localhost:3000";
  const [commits, setCommits] = useState([]);


  const getCommits = () => {
    axios
       .get(main_url + "/api/v1/github/get_commits/tuxrick/FTF_test_api")
       .then((resp) => {
         setCommits(resp.data.data);
       });
  };

  useState(() => {
    getCommits();
  }, []);



  return (

    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Ricardo Hernández Ramírez - Fullstack Developer
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Git commits 
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Test project that requests the information from the user to show a given project commits information
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py: 6 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {commits.map((commit, index) => (
              <Grid item key={index} xs={12} sm={12} md={12}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {commit.commit.author.name}
                    </Typography>
                    <Typography>
                      {"Message: " + commit.commit.message}
                    </Typography>
                    <Typography>
                      <Link color="inherit" href={commit.commit.url} style={{paddingTop:"5px"}}>
                        View Commit Info
                      </Link>                    
                    </Typography>                      
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
            RHR - Fullstack Developer
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}

export default App;
