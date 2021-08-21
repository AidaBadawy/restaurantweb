import aboutImage from "../images/about.png"
const About = () => {
    return (
        <div id='about'>
            <div className='about-text'>
                <h1>UPCOMING EVENT</h1>
                <p>Quis exercitation anim adipisicing amet magna exercitation ad deserunt
                     reprehenderit elit. Ipsum nostrud proident cupidatat</p>
                <button>Read More</button>
            </div>
            <div className='about-image'>
                <img src={aboutImage} alt='about-img'/>

            </div>
            
        </div>
    )
}

export default About
