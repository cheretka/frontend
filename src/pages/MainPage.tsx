import React, { Component} from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AppBar, Divider, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Grid, IconButton, Stack, Toolbar, Typography} from '@mui/material';
import { QuestionAnswer, Call, Home, Info } from '@mui/icons-material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';


class MainPage extends Component {

    theme = createTheme();

    styles = {
        paperContainer: {
            // backgroundImage: `url(https://images.unsplash.com/photo-1531685250784-7569952593d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80)`,
            // backgroundSize: "cover"
            backgroundColor: '#F7F7F7'
            // #F7F7F7
        
        }
    };

    Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

    render() {
        return (
            <ThemeProvider theme={this.theme}>
            <CssBaseline />
                <AppBar position="static" style={{backgroundColor: '#FFFFFF', color: '#3F3844'}}>
                <Toolbar>
                    <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}><b>Bots battles ⚔</b></Typography>
                    <Stack spacing={2} direction="row" justifyContent="flex-end">
                        <Button style={{backgroundColor: '#FFFFFF', color: '#00B2CA'}} size="large" endIcon={<Home />}><b>Home</b></Button>
                        <Button style={{backgroundColor: '#FFFFFF', color: '#7DCFB6'}} size="large" endIcon={<Call />}><b>About</b></Button>
                        <Button style={{backgroundColor: '#FFFFFF', color: '#FBD1A2'}} size="large" endIcon={<Info />}><b>Contact</b></Button>
                        <Button style={{backgroundColor: '#FFFFFF', color: '#F79256'}} size="large" endIcon={<QuestionAnswer />}><b>FAQ</b></Button>
                    </Stack>
                </Toolbar>
                </AppBar>
                
                <Paper style={this.styles.paperContainer}>
                <main>
                <Container sx={{ py: 5, px: 20 }} maxWidth='xl'>
                <div style={{justifyContent: "center", textAlign: "center", padding: 2}} >
                <h1 style={{fontSize: 50, padding: 1}}>Create bots. Join battles. </h1>
                <h2 style={{fontSize: 30}}> Improve your AI skills and have some fun!</h2>
                <h3 style={{fontSize: 8}}>(Also rage while
                    watching your bot do absolutly the oposite of what you've been teaching that little shit.)</h3>
                </div>
                <Divider variant="middle" sx={{ py: 1}} />

                <Grid container spacing={5} justifyContent="center" sx={{ py: 2}}>
                    <Grid item xs={3} >
                        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }} style={{boxShadow: "0 20px 40px -12px rgba(247,146,86,0.8)", backgroundColor: '#F7F7F7'}}>
                            <CardActionArea style={{backgroundColor: '#F7F7F7', color: '#3F3844'}}>
                                <CardMedia  component="img" sx={{pt: '5%'}} height="200"
                                    image="https://images.unsplash.com/photo-1525711857929-4272fb4a040f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmF0dGxlfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60" alt="Battle"
                                />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant="h5" component="h2">Create new game</Typography>
                                    <Typography>
                                    Choose type of a game and start new battle ☜(ﾟヮﾟ☜)
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid item xs={3} >
                        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }} style={{boxShadow: "0 20px 40px -12px rgba(0, 178, 202,0.8)", backgroundColor: '#F7F7F7'}}>
                            <CardActionArea style={{backgroundColor: '#F7F7F7', color: '#3F3844'}}>
                                <CardMedia  component="img" sx={{pt: '5%'}} height="200"
                                    image="https://images.unsplash.com/photo-1570455679702-0424bae83b1b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80" alt="I don't know either"
                                />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant="h5" component="h2">Join game</Typography>
                                    <Typography> Enter key to already created game ╰(⇀︿⇀)つ-]═───</Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid item xs={3} >
                        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }} style={{boxShadow: "0 20px 40px -12px rgba(125, 207, 182,0.8)", backgroundColor: '#F7F7F7'}}>
                            <CardActionArea style={{backgroundColor: '#F7F7F7', color: '#3F3844'}}>
                                <CardMedia  component="img" sx={{pt: '5%'}} height="200"
                                    image="https://images.unsplash.com/photo-1589254065878-42c9da997008?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80" alt="Bot"
                                />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant="h5" component="h2">Get yr bot</Typography>
                                    <Typography> Download already trained bot 🤖 Since we both know you are to lazy to train it yourself.</Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid item xs={3} >
                        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }} style={{boxShadow: "0 20px 40px -12px rgba(251, 209, 162,0.8)", backgroundColor: '#F7F7F7'}}>
                            <CardActionArea style={{backgroundColor: '#F7F7F7', color: '#3F3844'}}>
                                <CardMedia  component="img" sx={{pt: '5%'}} height="200"
                                    image="https://images.unsplash.com/photo-1596838132731-3301c3fd4317?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FzaW5vfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60" alt="Games"
                                />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant="h5" component="h2">Check out our games</Typography>
                                    <Typography> Browse through currently available games and study them to make bots that maybe can work</Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
                </Container>
                </main>
                </Paper>
            </ThemeProvider>
        );
    }
}

export default MainPage;