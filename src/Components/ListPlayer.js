import player from "../player"
import Player from "./Player"

const ListPlayer=()=>{
    return(
        <div className="play">
            {
                player.map((el,i,t)=> <Player key={i} el={el}/>)
            }
        </div>
    )
}

export default ListPlayer