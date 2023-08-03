import { Button } from '@mui/material'
import './NotFound.css'

function NotFound(){
    return(
        <div className="NotFound" style={{backgroundImage: "url(/images/dog-digging.jpg)"}}>
            <h1>Uh Oh</h1>
            <p>We can't find what you're looking for...</p>
            <Button variant="outlined" href="/">Follow the scent back Home?</Button>
        </div>
    )
}

export default NotFound