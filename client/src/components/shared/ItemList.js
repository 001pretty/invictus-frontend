import React from 'react'
import {Link} from 'react-router-dom'

function ItemList({itemKind, previousPrice}) {
    return (
        <div className="Mens-Items-Wrapper">
            {itemKind.map((item) => (
                <li key={item._id} style={{ listStyleType: "none" }}>
                    <div className="Mens-Item-Image">
                        <Link to={`/item/${item._id}`} alt={"Link to " + item.name}>
                        <div className="image-hover-container">
                            <img
                            src={"/" + item.imageUrl}
                            alt={item.name}
                            className="image-hover-image"
                            />
                            <div className="image-hover-overlay">
                            <img
                                src={"/" + item.imageUrl2}
                                className="image-hover-image"
                                alt={item.name + "2"}
                            />
                            </div>
                        </div>
                        </Link>
                        <p>{item.name}</p>
                        {previousPrice ? 
                        <>
                            <p style={{ textDecoration: "line-through"}}>{previousPrice}</p>
                            <p style={{ color: "#f94c43" }}>{item.price}</p>
                        </> : <p>{item.price}</p>}
                    </div>
                </li>
            )
            )}
        </ div>
    )           
}

export default ItemList

