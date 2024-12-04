'use strict'


import { useState, useEffect} from "react";
import ProductFilter from "./Productfilter";


function ListProduct({ onAddToCart }) {

    const [products, setProducts] = useState([]); // Состояние для данных
    const [loading, setLoading] = useState(true); // Состояние для отслеживания загрузки
    const [error, setError] = useState(null); // Состояние для ошибок
    const [addInBascet, setAddInBascet] = useState(false)
    const [detailsVisibility, setDetailsVisibility] = useState([]); // Состояние для показа деталей
    
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                if (!response.ok) {
                    throw new Error('Ошибка загрузки данных');
                }
                let data = await response.json();

                // Подмена данных для имитации
                data = [
                    { id: 1, name: 'Смартфон', price: 1000, description: 'Современный смартфон с отличной камерой.' },
                    { id: 2, name: 'Ноутбук', price: 1500, description: 'Мощный ноутбук для работы и игр.' },
                    { id: 3, name: 'Наушники', price: 200, description: 'Беспроводные наушники с шумоподавлением.' },
                ];

                setProducts(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []); // Пустой массив зависимостей — вызов только при монтировании

    const toggleDetails = (productId) => {
        if (detailsVisibility.includes(productId)) {
            setDetailsVisibility(detailsVisibility.filter((id) => id !== productId))
        } else {
            setDetailsVisibility([...detailsVisibility, productId])
        }
    };


    return (
        <div>
            <ProductFilter products={products} />
            <h1>Список товаров:</h1>
            {products.map((product) => (
                <div key={product.id} style={{border: '1px solid black', margin: '10px 10px', padding: '10px'}}>
                    <h2>{product.name}</h2>
                    <p> Цена:{product.price}</p>
                    <button onClick={()=> toggleDetails(product.id)}>
                        {detailsVisibility.includes(product.id) ? 'Скрыть детали' : 'Подробнее'}
                    </button>
                        {detailsVisibility.includes(product.id) && <p>{product.description}</p>}
                    <button onClick={()=> onAddToCart(product)}>Добавить в корзину</button>
                        {addInBascet && <p>Товар добавлен в карзину!</p>}
                </div>
            ))}
        </div>
    );
}

export default ListProduct
