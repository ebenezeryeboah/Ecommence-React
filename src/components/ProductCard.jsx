// import p1 from "../assets/images/p1.png"
// Another way to pass images around

import { Link } from 'react-router'

export default function ProductCard({ image, title, id }) {
    return (
        <div>
            <Link to={`/product/${id}`}>
                <div>
                    <img src={image} alt={title} />
                    <span>-30%</span>
                </div>
            </Link>
            <div>
                <h1>{title}</h1>
                <p>Stylish cafe chair</p>

                <div>
                    <span>GHC 2.500.00</span>
                    <span>GHC 3.500.00</span>
                </div>
            </div>
        </div>
    )
}