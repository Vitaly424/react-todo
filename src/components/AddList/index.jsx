import React, {useState} from 'react';
import List from '../List';
import Badge from '../Badge';
import './AddButtonList.scss'

import svgClose from '../../assets/img/close.svg';

const AddList = ({colors}) => {
   const [visiblePopup, setVisiblePopup] = useState(false);
   const [selectedColor, selectSolor] = useState(null);

   return (
      <>
         <List
            onClick={() => setVisiblePopup(!visiblePopup)}
            items={[
               {
                  icon: (<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 1V11" stroke="#868686" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M1 6H11" stroke="#868686" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                     </svg>
                  ),
                  name: 'Добавить папку'
               }
            ]}
         />
         {
            visiblePopup &&
            <div className="list-popup">
                  <button className="list-popup__close" onClick={() => setVisiblePopup(!visiblePopup)}>
                     <img src={svgClose} alt="Close button"></img>
                  </button>
                  <input className="field" type="text" placeholder='Название папки' />
                  <ul className="colors list-popup__colors">
                     {
                        colors.map(color => (
                           <li className="colors__item" key={color.id}>
                              <Badge
                                 onClick={() => selectSolor(color.id)}
                                 color={color.name}
                                 className={selectedColor === color.id && 'badge--active'}
                              />
                           </li>
                        ))
                     }
                  </ul>
                  <button className='button button--big'>Добавить</button>
            </div>
         }
      </>
   )
}

export default AddList;