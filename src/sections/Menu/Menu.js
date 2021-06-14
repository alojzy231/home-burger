import '../../styles/menu.css';
import Dish from './Dishes';
import * as data from './data.json';

export default function Menu(){
    return(
        <div className="menu">
            {data.dishes.map((val, index) => <Dish data={val} key={index}/>)}
        </div>
    )
}