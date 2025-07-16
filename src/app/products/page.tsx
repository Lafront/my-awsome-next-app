export default function ProdctsPage() {
    const products = [
        { id: 1, name: 'Product A', price: '$19.99' },
        { id: 2, name: 'Product B', price: '$29.99' },
        { id: 3, name: 'Product C', price: '$39.99' },
    ];

    return (
        <main style={{ padding: '2rem', textAlign: 'center' }}>
            <h1>Products Page</h1>
            <p>Welcome to the products section. Here you can browse and purchase items.</p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {products.map(product => (
                    <li key={product.id} style={{ margin: '1rem 0' }}>
                        <strong>{product.name}</strong> - {product.price}
                    </li>
                ))}
            </ul>
        </main>
    );
}