import ElephantBackground from '../../../imgs/ElephantBackground.png'
import s from './ProfileInformation.module.css'
import React from "react";

export const ProfileInformation : React.FC = () => {
  return (
    <div className={s.description}>
      <img src={ElephantBackground} alt="Elephant background" />
      <div>Avatar + description</div>
    </div>
  )
}