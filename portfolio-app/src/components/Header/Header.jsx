import overwatch from '../../media/images/fullstack overwatch white.png';
import avatar from '../../media/images/avatar.jpg';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

function Header(){

    const [t, i18n] = useTranslation('lang');
    const [btn, setBtn] = useState(false);

    const toggle = () => {
        setBtn(!btn);
    }

    return (
        <div className="header_container">
            <img src={overwatch} />
            <div className="player_container">
                <div className="player">
                    <div className="avatar"><img src={avatar}/></div>
                    <p className="name">Marcelo Armella</p>
                </div>
                {
                    btn 
                        ? <button className='langButton' onClick={() => {i18n.changeLanguage('es'); toggle();}} >en</button>
                        : <button className='langButton' onClick={() => {i18n.changeLanguage('en'); toggle();}} >es</button>
                }
                
                
            </div>
        </div>
    );
}

export default Header;