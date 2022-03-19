import "./Milestone.css";

const content = [
    {
        image: "https://picsum.photos/id/237/200/300",
        title: "SPACEUP 2020",
        desc: "IRES SEDS CUSAT conducted the third SPACE-UP Unconference ever in India. It was an accumulation of various collaborative events, seminars, forums and to provide the participants what is happening in the industry and to ask questions and learn from them. An opportunity to interact with some of the greats in the field."
    },

    {
        image: "https://picsum.photos/id/237/200/300",
        title: "DRONE MAKING WORKSHOP",
        desc: "The Drone Making Workshop had a goal for participants to learn the basics of drone making with  the limited resources provided, to build and fly their drone with more confidence in a safe way. Withexperts there to help them learn and create."
    },
    {
        image: "https://picsum.photos/id/237/200/300",
        title: "CUSAT WORKSHOP",
        desc: "The workshop aimed at designing and providing the knowledge of space science, satellites, electronics, and embedded system from basic to advance levels. Basic learning was provided to the participants on the making of miniature satellites."
    }
];

const Milestone = () => {
    return (
        <>
            <div className="milestone-parent">
                <div className="milestone-heading">
                    <h1>Milestone</h1>
                </div>
                <div className="milestone-body">
                {
                    content.map((item) => (
                        <Card image={item.image} title={item.title} desc={item.desc}/>
                    ))
                }
                </div>
            </div>
        </>

    );
}


export default Milestone;

const Card = ({image, title, desc}) => {
    return(
        <>
            <div className="milestone-card" id="milestone">
                <div className="mile-card-img">
                    <img src={image} alt=""/>
                </div>
                <div className="mile-card-text">
                    <h2>{title}</h2>
                    <p>{desc}</p>
                </div>
            </div>
        </>
    );
}