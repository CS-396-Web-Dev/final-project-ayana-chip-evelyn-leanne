import "./App.css"
import Tamagotchi from "./components/Tamagotchi"

function App() {
  let name:string="Tamagotchi";
  let hunger:number=100;
  let happiness:number=100;
  let cleanliness:number=100;
  let growth:string="alive";
  let index_x:number=0;
  let index_y:number=0;
  return (
    <>
      {/* <h1>Tamogatchi App</h1> */}
      <Tamagotchi name={name} hunger={hunger} happiness={happiness} cleanliness={cleanliness} growth={growth} index_x={index_x} index_y={index_y} />
    </>
  )
}

export default App
