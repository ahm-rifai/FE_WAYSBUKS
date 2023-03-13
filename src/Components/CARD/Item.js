import React from 'react'
import ItemsList from './ItemsList'

function ItemCard ({ dataDumy }) {
    return (
        <>
            {
                dataDumy.map((data) => (
                    <ItemsList key={data.id} {...data}/>
                )) 
            }
        </>
        )
}

export default ItemCard