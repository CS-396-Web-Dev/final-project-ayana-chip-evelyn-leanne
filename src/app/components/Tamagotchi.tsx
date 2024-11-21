// import { useState } from "react";

interface Props {
  name: string;
  hunger: number;
  happiness: number;
  cleanliness: number;
  growth: string;
  index_x: number;
  index_y: number;
}
const Tamagotchi = (props : Props) => {
  console.log(props);

  const imageStyle:React.CSSProperties = {
    position: 'absolute',
    top: '75%',
    left: '50%',
    transform: `translate(${props.index_x-112.5}px, ${props.index_y-112.5}px)`,
  };

  return (
  <>
    <img
     src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgkC6eik7wJKas6zKgVmEehFpFcRzE28n0qg&s"} 
     alt="tamagotchi" 
     style={imageStyle}
     />
  </>
  )
}

export default Tamagotchi
