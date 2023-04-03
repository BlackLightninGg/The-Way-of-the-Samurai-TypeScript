import LogoZoo from '../../imgs/Zoo.png'
import s from './Header.module.css'

export const Header = () => {
    return (
        <header className={s.header}>
            <img className={s.logoZoo} src={LogoZoo} alt="Zoo logo" />
        </header>
    )
}