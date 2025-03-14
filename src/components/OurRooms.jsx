import Economy from '../assets/images/Economy.png'
import EconomyPlus from '../assets/images/EconomyPlus.png';
import Comfort from '../assets/images/Comfort.png';
import SuperLuxury from '../assets/images/SuperLuxury.png';
import Suite from '../assets/images/Suite.png';
import Luxury from '../assets/images/Luxury.png';
import RoomsCard from './roomsMap';


function OurRooms() {
    const rooms = [
        {   
            image : Economy,
            name : "Эконом",
            size : "(ШхГхВ) - 90х70х180 см",
            square : "0,63 м2",
            price : "100₽"
            
        },
        {
            image : EconomyPlus,
            name : "Эконом Плюс",
            size : "(ШхГхВ) - 90х100х180 см",
            square : "0,90 м2",
            price : "200₽"
            
        },
        {
            image : Comfort,
            name : "Комфорт",
            size : "(ШхГхВ) - 100х125х180 см",
            square : "1,13 м2",
            price : "250₽"
            
        },
        {
            image : SuperLuxury,
            name : "Супер Люкс",
            size : "(ШхГхВ) - 180х160х180 см",
            square : "2,88 м2",
            price : "600₽"
            
        },
        {
            image : Suite,
            name : "Сьют",
            size : "(ШхГхВ) - 125х125х180 см",
            square : "1,56 м2",
            price : "350₽"
            
        },
        {
            image : Luxury,
            name : "Люкс",
            size : "(ШхГхВ) - 160х160х180 см",
            square : "2,56 м2",
            price : "500₽"
            
        },
        {   
            image : Economy,
            name : "Эконом",
            size : "(ШхГхВ) - 90х70х180 см",
            square : "0,63 м2",
            price : "100₽"
            
        },
        {
            image : EconomyPlus,
            name : "Эконом Плюс",
            size : "(ШхГхВ) - 90х100х180 см",
            square : "0,90 м2",
            price : "200₽"
            
        }
      ]
        
    return(
    <>   
        <section className="ourRooms" id="catalog">
            <h2 className="ourRooms__title">
            Наши номера
            </h2>
            <div className="ourRooms__grid"> 
                    {rooms.map((rooms, index) => (
                        <RoomsCard
                        key = {index}
                        name = {rooms.name}
                        size = {rooms.size}
                        square = {rooms.square}
                        price = {rooms.price}
                        image = {rooms.image}
                        />
                    ))}
            </div>
        </section>
    </> 
    );
}

export default OurRooms;