import React from 'react'
import { useParams, useSearchParams } from 'react-router'

const ProductDetail = () => {
    const { id } = useParams()
    const [searchParams] = useSearchParams()
    return (
        <div>
            <h1>Product Detail</h1>
            <p>We have the product id of {id} using path param</p>
            <p>We have the product id of {searchParams.get('id')} using query param</p>
        </div>
    )
}

export default ProductDetail