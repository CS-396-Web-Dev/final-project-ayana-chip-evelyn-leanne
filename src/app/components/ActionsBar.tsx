const ActionsBar= ({showing}: {showing:boolean}) =>{
  return <div className="outer">
          <div className={showing? "slideMenu active" :"slideMenu"}>
          <ul className="buttonList">
            <li className="indButton"><button onClick={()=>console.log('feed button clicked')}>feed</button></li>
            <li className="indButton"><button onClick={()=>console.log('play button clicked')}>play</button></li>
            <li className="indButton"><button onClick={()=>console.log('wash button clicked')}>wash</button></li>
          </ul>
        </div>
        </div>
  }
  
  
  export default ActionsBar