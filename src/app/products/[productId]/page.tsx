export default async function ProductDetails({ params }: { params: Promise<{ productId: string }> }) {
    const { productId } = await params;
    return (
        <div>
            <h1 style={{ padding: '2rem', textAlign: 'center' }}>Product Page</h1>
            <p style={{ padding: '2rem', textAlign: 'center' }}>Welcome to the product page. Here you can view details about the product.</p>
            <h1 style={{ padding: '2rem', textAlign: 'center' }}>{productId}</h1>
        </div>
    );
}