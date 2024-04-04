import storeItems from '../data/items.json';
import IndiItem from './IndiItem';

export default function Store() {


  return (
    <>
      <div className='grid grid-cols-3 gap-1 m-2.5'>
        {storeItems.map((indiItem) => {
             return (<IndiItem key={indiItem.id} {...indiItem} />)

})}
      </div>
    </>
  );
}
