import React from "react";
import s from "./FriendsSection.module.css";
import {DialogUserType} from "../../Messages/DialogUser/DialogUser";

type PropsType = {
    friendsData: DialogUserType[]
}
export const FriendsSection: React.FC<PropsType> = ({friendsData}) => {
    return (
        <div className={s.friendSection}>
            <h3 className={s.title}>Friends</h3>
            {friendsData.map(fd =>
                <div>
                    <img src={fd.photoAvatar} alt="#"/> <span>{fd.animalName}</span>
                </div>
            ).slice(0, 3)}

        </div>
    )
}