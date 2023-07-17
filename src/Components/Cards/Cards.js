import React from 'react';
import './Cards.css'


const Cards = () => {
    const task = {
        name: '[Unnamed]',
        role: 'ART Assurified Admin',
        date: 'July 05 2023  12:11 PM',
        type: 'Customer Onboarding',
        tags: 'Assigned'
        
      };

      
  return (
    <div className='cards'>
        <h4>{task.name}</h4>
        <p>{task.role}</p>
        <p>{task.date}</p>
        <p>{task.type}</p>
        <span>{task.tags}</span>
    </div>
  )
}

export default Cards