import { MyPosts } from './MyPosts/MyPosts'
import s from './Profile.module.css'
import {ProfileInformation} from './ProfileInformation/ProfileInformation'
import React from "react";

export const Profile : React.FC = () => {
  return (
    <div>
      <ProfileInformation />
      <MyPosts />
    </div>
  )
}