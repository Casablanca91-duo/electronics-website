'use strict'



function Cart({item, onRemove}) {
    const totalSum = item.reduce((total, product) => total + product.price, 0);
    return (
        <div>
            <h2>Корзина</h2>
            {item.length === 0 ?
                (<p>Корзина пуста</p>

                ) : (
                    <div>
                    <ul style={{listStyle: "none"}}>
                        {item.map((item, index) => 
                            <li key={index}>
                                {item.name} - {item.price} руб.
                                <button onClick={()=> onRemove(index)}>Удалить</button>

                            </li>
                        )}
                    </ul>
                    <p><strong>Итого: {totalSum} руб.</strong></p>
                </div>     
            )}
        </div>
    );
}

export default Cart