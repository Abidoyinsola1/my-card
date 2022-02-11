import ProfilePic from '../assets/doyinsola.jpg'

const Header = () => {
    return (
        <div className='details'>
            <img src={ProfilePic} />
            <h3 style={{marginTop: "15px"}}>Doyinsola Oyewole</h3>
            <p style={{marginTop: "10px"}}>Frontend Developer</p>
            <small>oyedoyinsola.com</small>
            <div className='buttons'>
                <button><i className='fa fa-envelope'></i>Email</button>
                <button><i className='fa fa-envelope'></i>LinkedIn</button>
            </div>
        </div>
    )
}

export default Header