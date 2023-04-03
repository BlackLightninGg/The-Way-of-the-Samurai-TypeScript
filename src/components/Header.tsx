import logoZoo from '../imgs/Zoo.png'
import './Header.css'

export const Header = () => {
    return (
        <header className="header">
            <img className='logoZoo' src={logoZoo} alt="Zoo logo" />
        </header>
    )
}