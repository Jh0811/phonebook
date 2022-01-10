import React from 'react';
import { useSelector } from 'react-redux';
import ContactCard from './ContactCard';
function Favourites() {
    const contacts = useSelector(state => state .allcontacts)
    return (
        <div>
            {
            contacts.map(element => {
                    if(element.isFav===true) {
                    return (<ContactCard name={element.name} mobile={element.mobile} isFav={element.isFav} id={element.id}/>)
                    }
                })
            }
        </div>
    )
}

export default Favourites
