import paw_orange from '../assets/images/paw_orange.png';
import { Link } from 'react-router-dom';

function RoomsCard({ image, name, size, square, price}) {
    
    return (
    <div className="ourRooms__grid">    
        <div className="ourRooms__card">
                <div>
                <img className='ourRooms__image' src={image}/>
                <p className="ourRooms__text">{name}</p>
                <p className="ourRooms__text">Размеры - {size}</p>
                <p className="ourRooms__text">Площадь - {square}</p>
                <p className="ourRooms__text">Цена - {price}</p>
                </div>        
                <Link to={"/Rooms/:roomId"}>
                <button className="ourRooms__button">        
                    Забранировать
                    <img src={paw_orange} alt="button_paw"/>        
                </button> 
                </Link>               
        </div> 
    </div>                         
    );
}

export default RoomsCard;