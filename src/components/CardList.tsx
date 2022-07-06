import { Monster } from '../App';
import Card from './Card';
import '../index.css';

type CardListProps = {

  monsters:Monster[];
}
const CardList = ({ monsters }: CardListProps) => (
  <div className='card-list'>
    {monsters.map((monster) => {
      return <Card key={monster.id as string} monster={monster} />;
    })}
  </div>
);

export default CardList;
