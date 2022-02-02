import './List.scss';
import classNames from 'classnames';
import Badge from '../Badge';

const List = ({ items, isRemovable, className, onClick }) => {
   
   return (
      <ul
         className="todo-list"
         onClick={onClick}
      >
         {items.map(item => (
            <li
               key={item.name}
               className={
                  classNames(
                     'todo-list__item',
                     item.className,
                     {'todo-list__item--active': item.active}
                  )
               }
            >
               {item.icon ? (item.icon) : <Badge color={ item.color }/>}
               <span className="todo-list__text">{item.name}</span>
            </li>
         ))}        
      </ul>
   )
}

export default List;