import ElephantBackground from '../../../imgs/ElephantBackground.png';
import s from './ProfileInformation.module.css';

export const ProfileInformation = () => {
  return (
    <div className={s.description}>
      <img src={ElephantBackground} alt="Elephant background" />
      <div>Avatar + description</div>
    </div>
  )
}