import { useStatContext } from "./StatContext"

const ActionsBar= () =>{
  const { hunger, setHunger, happiness, setHappiness, cleanliness, setCleanliness} = useStatContext();

  return <div className="outer">
          {/* <div className={showing? "slideMenu active" :"slideMenu"}> */}
          <ul className="buttonList">
            <li className="indButton"><button onClick={()=>{setHunger(Math.min(hunger+10, 100)); setHappiness(Math.max(0, happiness-3)); setCleanliness(Math.min(cleanliness+10, 100)); }}>feed</button></li>
            <li className="indButton"><button onClick={()=>{setHunger(Math.max(0, hunger-3)); setHappiness(Math.min(happiness+10, 100)); setCleanliness(Math.max(0, cleanliness-3)); }}>play</button></li>
            <li className="indButton"><button onClick={()=>{setHunger(Math.max(0, hunger-3)); setHappiness(Math.max(0, happiness-3)); setCleanliness(Math.min(cleanliness+10, 100)); }}>shower</button></li>
          </ul>
        {/* </div> */}
        </div>
  }
  
  
export default ActionsBar