import ProfilePic from '../assets/doyinsola.jpg'

const Header = () => {
    return (
        <div className='details'>
            <img src={ProfilePic}/>
            <h3>Doyinsola Oyewole</h3>
            <p>Frontend Developer</p>
            <small>oyedoyinsola.com</small>
            <div>
                <button><i className='fa fa-envelope'></i>Email</button>
                <button><i className='fa fa-envelope'></i>LinkedIn</button>                
            </div>
        </div>
    )
}

export default Header