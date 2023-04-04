import s from './Navbar.module.css'

export const Navbar = () => {
    return (
        <nav className={s.navbar}>
            <div className={`${s.item} ${s.active}`}>
                <a href='/profile'>Profile</a>
            </div>
            <div className={s.item}>
                <a href='/messages'>Message</a>
            </div>
            <div className={s.item}>
                <a href='/news'>News</a>
            </div>
            <div className={s.item}>
                <a href='/music'>Music</a>
            </div>
            <div className={s.item}>
                <a href='/settings'>Settings</a>
            </div>
        </nav>
    )
}