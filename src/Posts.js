import { useState } from 'react'

function Post(props) {

    const saved = {
        false: "bookmark-outline",
        true:"bookmark"
    }
    const liked = {
        false: "heart-outline",
        true: "heart"
    }
    const [like, setLike] = useState(liked.false);
    const [likes, setLikes] = useState(parseFloat(props.likes));
    console.log(likes);
    const [bookmark, setBookmark] = useState(saved.false);
    
    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.userImage} />
                    {props.userName}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={props.postImage} onClick={() =>
                {
                    if (like === liked.false) {
                        setLike(liked.true);
                        setLikes(likes + 1);
                    }
                    }} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name={like} onClick={() =>
                        {
                            if (like === liked.false) {
                                setLike(liked.true);
                                setLikes(likes + 1);
                            }
                            else {
                                setLike(liked.false);
                                setLikes(likes - 1);
                                }
                            
                        }}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name={bookmark} onClick={() => {
                            if (bookmark === saved.false)
                                setBookmark(saved.true)
                            else setBookmark(saved.false);
                        }}></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.profileImage} />
                    <div class="texto">
                        Curtido por <strong>{props.profileName}</strong> e <strong>outras {likes} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function Posts() {
    const postProps = [
        {
            userImage: "assets/img/meowed.svg",
            userName: "meowed",
            postImage: "assets/img/gato-telefone.svg",
            profileImage: "assets/img/respondeai.svg",
            profileName: "respondeai",
            likes: "101.523"
        },
        {
            userImage: "assets/img/barked.svg",
            userName: "barked",
            postImage: "assets/img/dog.svg",
            profileImage: "assets/img/adorable_animals.svg",
            profileName: "adorable_animals",
            likes: "99.159"
        }
    ]
    return (
        <div class="posts">
            {postProps.map((postProp) =>
                <Post
                    userImage={postProp.userImage}
                    userName={postProp.userName}
                    postImage={postProp.postImage}
                    profileImage={postProp.profileImage}
                    profileName={postProp.profileName}
                    likes={postProp.likes}
                    />)}
            
        </div>
    )
}