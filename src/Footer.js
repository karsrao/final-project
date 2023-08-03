import { Link } from 'react-router-dom'
import './Footer.css'

import { Container } from '@mui/material'
import { Grid } from '@mui/material'
import { Typography } from '@mui/material'

function Footer(){
    return(
        <footer className="footer">
            <Container maxWidth="xl">
                <Grid container spacing={2} className='footer-top'>
                    <Grid item xs={12} md={6}>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                            mr: 2,
                            display: 'flex',
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            justifyContent:{xs: 'center', sm: 'left' }
                            }}
                        >
                            Diego and Co.
                        </Typography>
                        <div className='fun-fact'>
                            <h4>Doggo Trivia:</h4>
                            <p>Doggo ipsum bork long doggo mlem vvv, big ol sub woofer. He made many woofs borkf h*ck long woofer, blep extremely cuuuuuute.</p>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className="footer-nav">
                            <Link to="/">Home</Link>
                            <Link to="/products">Products</Link>
                            <Link to="/about">About</Link>
                            <Link to="/contact">Contact</Link>
                        </div>                        
                    </Grid>
                </Grid>
            
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} className='copyright-text'>
                        <p>Copyright © {new Date().getFullYear()} Diego and Co.</p>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        {/* <p>Social Media</p>                     */}
                    </Grid>
                </Grid>
            </Container>
        </footer>
    )
}
export default Footer