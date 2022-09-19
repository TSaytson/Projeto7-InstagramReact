import { useState } from "react";

export default function Usuario(props) {
    const [userName, setUserName] = useState(props.userName);
    const [userImage, setUserImage] = useState(props.userImage);
    return (
        <div class="usuario">
            <img src={userImage} onClick={()=>setUserImage(prompt("Digite o link da nova foto:"))} />
            <div class="texto">
                <strong>{userName}</strong>
                <span>
                    {props.userNick}
                    <ion-icon name="pencil" onClick={()=>setUserName(prompt("Digite o novo nome:"))}></ion-icon>
                </span>
            </div>
        </div>
    )
}