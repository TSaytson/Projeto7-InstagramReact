export default function Stories() {
    const storiesProps = [
        {
            image: "assets/img/9gag.svg",
            name: "9gag"
        },
        {
            image: "assets/img/meowed.svg",
            name: "meowed"
        },
        {
            image: "assets/img/barked.svg",
            name: "barked"
        },
        {
            image: "assets/img/nathanwpylestrangeplanet.svg",
            name: "nathanwpylestrangeplanet"
        },
        {
            image: "assets/img/wawawicomics.svg",
            name: "wawawicomics"
        },
        {
            image: "assets/img/respondeai.svg",
            name: "respondeai"
        },
        {
            image: "assets/img/filomoderna.svg",
            name: "filomoderna"
        },
        {
            image: "assets/img/memeriagourmet.svg",
            name: "memeriagourmet"
        },

    ]

    function Story(props) {
        return (
            <div class="story">
                <div class="imagem">
                    <img src={props.userImage} />
                </div>
                <div class="usuario">
                    {props.userName}
                </div>
            </div>
        )
    }

    return (
        <div class="stories">
            {storiesProps.map((story) =>
                <Story
                    userImage={story.image}
                    userName={story.name}
                />)}
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}