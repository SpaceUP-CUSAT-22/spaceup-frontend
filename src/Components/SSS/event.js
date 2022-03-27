import React from "react";
import {Fade} from "react-reveal";
import range from "lodash/range";
import styled from "styled-components";
import ItemsCarousel from "react-items-carousel";

const para = ["For centuries, humans across history have seen the same sky and looked at the patterns of stars like beautiful lanterns hanging in the sky. But, since the discovery of telescopes, nothing comes close to diving deep into the magnificence of"
//                         stars, planets and moons. On this day, gazing at
//                         the wonders of the night sky is made more fun
//                         by watching it together. Everyone sees the world
//                         differently and what’s better than finding out
//                         how others view the same sky"
]
const noOfItems = 4;
const noOfCards = 3;
const autoPlayDelay = 2000;
const chevronWidth = 40;

const Wrapper = styled.div`
  padding: 0 ${chevronWidth}px;
  max-width: 1460px;
  margin: 0 auto;
`;

const SlideItem = styled.div`
  height: 360px;
  width: 400px;
  background: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
`;

const carouselItems = range(noOfItems).map(index => (
  <SlideItem key={index}>
      <div>
        <img src={`https://picsum.photos/id/${index}/400/400`} alt=""/>
        <p>{para[0]}</p>
      </div>
      
    </SlideItem>
));

export default class Mission extends React.Component {
  state = {
    activeItemIndex: 0
  };

  componentDidMount() {
    this.interval = setInterval(this.tick, autoPlayDelay);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick = () =>
    this.setState(prevState => ({
      activeItemIndex:
        (prevState.activeItemIndex + 1) % (noOfItems - noOfCards + 1)
    }));

  onChange = value => this.setState({ activeItemIndex: value });

  render() {
    return (
      <Wrapper>
        <ItemsCarousel
          gutter={30}
          numberOfCards={noOfCards}
          activeItemIndex={this.state.activeItemIndex}
          requestToChangeActive={this.onChange}
          rightChevron={<button>{">"}</button>}
          leftChevron={<button>{"<"}</button>}
          chevronWidth={chevronWidth}
          outsideChevron
          children={carouselItems}
        />
      </Wrapper>
    );
  }
}


// const Mission = () => {
//     return (
//         <>
//         <div className="carousel-wrapper">
//             <Carousel infiniteLoop useKeyboardArrows autoPlay width="50%">
//                 <div>
//                     <img src={image1} />
//                 </div>
//                 <div>
//                     <img src={image1} />
//                 </div>
//                 <div>
//                     <img src={image1} />
//                 </div>
//             </Carousel>
//         </div>

//         </>
//     )
// }

// export default Mission;

// import React from "react"
// import { Slide } from "react-reveal"
// import CapsuleImage from "../../Assets/sssAssets/Events/capsule.jpg"
// import Heading from "../Elements/Heading"


// export default function Events() {

//     return <div id="Sevent" className="flex z-50 flex-col min-h-screen p-5 bg-sss-bg-mobile bg-fixed bg-bottom sm:bg-sss-bg-tablet xl:bg-sss-bg bg-no-repeat bg-cover p-10 justify-center">

//         <Heading text={"FLAGSHIP EVENTS"} />
        
//         <div className="container font-poppins  grid grid-col-1 place-items-center text-gray-50 text-justify md:grid-cols-1 lg:grid-cols-2 relative   xl:grid-cols-3 gap-3">

 
//             <Slide left duration={1000}>
//                 <div className="flex p-3 flex-col items-center bg-black/50 bg-blur-3xl md:max-w-xl">
//                     <img src={CapsuleImage} className="w-full" alt="" />
//                     <h1 className="text-2xl font-bold text-white text-center">SKY GAZING THROUGH THE LENSES</h1>
//                     <p className="text-base">For centuries, humans across history have seen
//                         the same sky and looked at the patterns of stars
//                         like beautiful lanterns hanging in the sky. But,
//                         since the discovery of telescopes, nothing comes
//                         close to diving deep into the magnificence of
//                         stars, planets and moons. On this day, gazing at
//                         the wonders of the night sky is made more fun
//                         by watching it together. Everyone sees the world
//                         differently and what’s better than finding out
//                         how others view the same sky.</p>
//                 </div>
//             </Slide>

//             <Slide bottom duration={1000}>
//                 <div className="flex space-y-5  p-3 flex-col items-center  bg-black/50  bg-blur-3xl md:max-w-xl">
//                     <img src={CapsuleImage} className="w-full" alt=""/>
//                     <h1 className="text-2xl font-bold text-white">MINI PLANETARIUM</h1>
//                     <p className="text-base">They said the sky is not the limit, neither are the
//                         stars. Let’s take a tour of all the celestial bodies
//                         you ever wondered about. The mini planetarium is
//                         an adventure to the SPACE-UP above us. It’s your
//                         voyage to the celestial bodies with information to
//                         enlighten your mind. Escape into the own world of
//                         planets, stars, galaxies that we are creating as a
//                         team for you to apprehend the lives and sight of
//                         astronauts through your own eyes.</p>
//                 </div>
//             </Slide>

//             <Slide right duration={1000}>
//                 <div className="flex space-y-5  p-3 flex-col items-center  bg-black/50  bg-blur-3xl md:max-w-xl">
//                     <img src={CapsuleImage} className="w-full" alt="" />
//                     <h1 className="text-2xl font-bold text-white">INTERACTIVE SESSIONS</h1>
//                     <p className="text-base text-left">Seminars and lectures can be quite boring and
//                         the whole idea of this event is to exchange
//                         ideas. Therefore, we have planned to discuss
//                         topics, discover opportunities, contrive ideas and hypothecate the unknown with your fellow participants.
//                         Information that comes up when we interact with another always is a better way of
//                         understanding.</p>
//                 </div>

//             </Slide>

//             <Slide left>
//                 <div className="flex space-y-5  p-3 flex-col items-center  bg-black/50  bg-blur-3xl md:max-w-xl">
//                     <img src={CapsuleImage} className="w-full" alt="" />

//                     <h1 className="text-2xl font-bold text-white">STUDENTS SATELLITE PROGRAM</h1>

//                     <p className="text-base">
//                         Founded by the team behind SPACE-UP CUSAT and
//                         supported by the national level university space club,
//                         SEDS-IRES CUSAT. The Student Satellite Program (SSP) aims to
//                         create a community that can design, fabricate and test space technology subsystems for
//                         its operation both domestically and internationally.</p>
//                 </div>

//             </Slide>

//             <Slide bottom>
//                 <div className="flex space-y-5  p-3 flex-col items-center  bg-black/50  bg-blur-3xl md:max-w-xl">
//                     <img src={CapsuleImage} className="w-full" alt="" />
//                     <h1 className="text-2xl font-bold text-white">DOCUMENTARY</h1>
//                     <p className="text-base">When the theoretical knowledge is integrated with
//                         practicality the understanding and applications
//                         of that knowledge evolve on a progressive level.
//                         With this documentary, We aim to
//                         reach every space enthusiast in the society with a whole new element of space. </p>
//                 </div>
//             </Slide>
//         </div>
//     </div>

// }