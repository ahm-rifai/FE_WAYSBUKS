import React from 'react'
import ItemCard from './Item'
import { getData } from '../../Utils/Data'

function List() {
    const dataDumy = getData()
    return (
        <>
            <ItemCard dataDumy={dataDumy} />
        </>
    )
}

export default List