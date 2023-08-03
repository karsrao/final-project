import PageIntro from "./layout/PageIntro"
import "./About.css"

import { Container } from "@mui/material"

function About(){
    return(
        <Container maxWidth="xl" className="main-container">
            <div className="About">
                <PageIntro 
                    title={'About'} 
                    description={'We embrace the timeless bond between humans and their four-legged friends. Our artisans pour their heart and soul into every creation, resulting in one-of-a-kind pieces that exude charm, comfort, and undeniable flair. With a commitment to ethical sourcing and sustainable practices, we strive to create accessories that not only celebrate your pup\'s individuality but also contribute to a greener planet.'} 
                />
                
                <div className="about-list-wrap">
                    <h2>Why Diego and Co:</h2>
                    <ul>
                        <li><strong>Artisanal Excellence:</strong> Our accessories are lovingly handcrafted by skilled artisans who understand the unique needs and preferences of your furry friends.</li>
                        <li><strong>Distinctive Designs:</strong> Stand out from the pack with accessories that reflect your pup's personality and your discerning taste.</li>
                        <li><strong>Premium Materials:</strong> We meticulously source the finest materials, ensuring comfort, durability, and style in every creation.</li>
                        <li><strong>Made in Australia:</strong> Proudly Australian, our accessories showcase the country's rich heritage and creative spirit.</li>
                        <li><strong>Sustainable Luxury:</strong> Embrace eco-friendly opulence with accessories that are as gentle on the planet as they are on your pup.</li>
                    </ul>
                </div>                
                
            </div>
        </Container>
    )
}
export default About