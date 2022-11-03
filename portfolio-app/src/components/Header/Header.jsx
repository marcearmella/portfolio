import overwatch from '../../media/images/fullstack overwatch white.png';
import avatar from '../../media/images/avatar.jpg';

function Header(){
    return (
        <div className="header_container">
            <img src={overwatch} />
            <div className="player">
                <div className="avatar"><img src={avatar}/></div>
                <p className="name">Marcelo Armella</p>
            </div>
        </div>
    );
}

export default Header;