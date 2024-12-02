import { useStatContext } from "./StatContext";

// interface Props {
//   name: string;
//   hunger: number;
//   happiness: number;
//   cleanliness: number;
//   growth: string;
//   index_x: number;
//   index_y: number;
// }
const Tamagotchi = () => {
  const { name, hunger, happiness, cleanliness, growth, index_x, index_y } = useStatContext();
  console.log(name, hunger, happiness, cleanliness, growth, index_x, index_y);

  const imageStyle:React.CSSProperties = {
    position: 'absolute',
    top: '75%',
    left: '50%',
    transform: `translate(${index_x-112.5}px, ${index_y-112.5}px)`,
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
