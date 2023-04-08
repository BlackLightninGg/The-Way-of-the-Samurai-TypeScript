import ElephantBackground from '../../../imgs/ElephantBackground.png'
import s from './ProlifeInformation.module.css'

export const ProlifeInformation = () => {
  return (
    <div className={s.description}>
      <img src={ElephantBackground} alt="Elephant background" />
      <div>Avatar + description</div>
    </div>
  )
}