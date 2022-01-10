import React from 'react';
import {useSelector} from 'react-redux';
import ContactCard from './ContactCard';

function Recent() {

     const allcontacts = useSelector(state => state.allcontacts),
     const recentCalls = useSelector(state => state.recentCalls)

     let arr=[]
     for(let i=recentCalls.length-1;i>=0;i--){
        let currId=recentCalls[i]
        let currContact = {}
        allcontacts.forEach(contact =>{
            if(contact.id===currId){
                currContact = contact
            }
        })
        arr.push(<ContactCard name= {currContact.name} mobile={currContact.mobile} isFav={currContact.isFav} id={currContact.id}/>)
    }
    return (
        <div>
            {
                      arr.map(e => e)
            }
        </div>
    )
}

export default Recent
