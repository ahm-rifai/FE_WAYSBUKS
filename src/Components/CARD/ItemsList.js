import React from 'react'
import Items from './Card'

function ItemsList({title, harga, imageUrl}) {
    return (
        <>
            <Items title={title} harga={harga} imageUrl={imageUrl} />
        </>
    )
}

export default ItemsList