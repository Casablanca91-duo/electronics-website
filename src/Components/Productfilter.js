'use strict'

    import { useState } from "react"


    function ProductFilter({products}) {

        const [searchQuery, setSearchQuery] = useState("")

        const filterProduct = products.filter((product) => product.name.toLowerCase().includes(searchQuery.toLowerCase()))

        return (
            <div>
                <input 
                    type="text"
                    placeholder="Название товара"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                {filterProduct.length === 0 ? <p>Товар не найден</p> : (
                <ul style={{ listStyle: "none"}}>
                    {filterProduct.map((product, index) => 
                        <li key = {index}>
                            {product.name}
                        </li> 
                    )} 
                </ul>
                )}
            </div>
        )
    }


    export default ProductFilter