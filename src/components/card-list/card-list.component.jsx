import Card from '../card/card.component';
import './card-list.styles.css';

// Implicit return
// Implicit returns are optional and solely used for shortening the code within a function body.
const CardList = ({ monsters }) => (
    <div className='card-list'>
        {
            monsters.map((monster) => {
                return (
                    <Card monster={monster} key={monster.id}/>
                );
            })
        }
    </div>
);

export default CardList;