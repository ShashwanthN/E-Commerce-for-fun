import React from 'react';

const Sort = () => {
    return (
        <div className='ml-4 mr-4   border-gray-light border-b-2'>
        <div className='justify-between  text-lg text-gray ml-20 mb-2 mr-20 mt-2 flex'>
        <button className='hover:text-gray-dark'>For You</button>
            <button className='hover:text-gray-dark'>On Sale</button>
            <button className='hover:text-gray-dark'>Recently Launched</button>
            <button className='hover:text-gray-dark'>Deals</button>
            <button className='hover:text-gray-dark'>Top Picks</button>
            
        </div>
        </div>
    );
}

export default Sort;
