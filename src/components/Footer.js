import TwitterIcon from '../assets/twitter.png'
import FacebookIcon from '../assets/facebook.png'
import InstaIcon from '../assets/instagram.png'
import GithubIcon from '../assets/github.png'

const Footer = () => {
    return (
        <div className="footer">
            <img src={TwitterIcon}/>
            <img src={FacebookIcon}/>
            <img src={InstaIcon}/>
            <img src={GithubIcon}/>
        </div>
    )
}

export default Footer