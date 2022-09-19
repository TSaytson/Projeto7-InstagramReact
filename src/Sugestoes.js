export default function Sugestoes() {
    const suggestions = [
        {
            userImage: "assets/img/bad.vibes.memes.svg",
            userName: "bad.vibes.memes",
            reason: "Segue você"
        },
        {
            userImage: "assets/img/chibirdart.svg",
            userName: "chibirdart",
            reason: "Segue você"
        },
        {
            userImage: "assets/img/razoesparaacreditar.svg",
            userName: "razoesparaacreditar",
            reason: "Novo no Instagram"
        },
        {
            userImage: "assets/img/adorable_animals.svg",
            userName: "adorable_animals",
            reason: "Segue você"
        },
        {
            userImage: "assets/img/smallcutecats.svg",
            userName: "smallcutecats",
            reason: "Segue você"
        },
    ]

    function Sugestao(props) {
        return (
            <div class="sugestao">
                <div class="usuario">
                    <img src={props.userImage} />
                    <div class="texto">
                        <div class="nome">{props.userName}</div>
                        <div class="razao">{props.reason}</div>
                    </div>
                </div>

                <div class="seguir">Seguir</div>
            </div>
        )
    }
    
    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {suggestions.map((suggestion) =>
                <Sugestao
                    userImage={suggestion.userImage}
                    userName={suggestion.userName}
                    reason={suggestion.reason}
                />)}
        </div>
    )
}