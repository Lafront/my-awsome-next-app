export default async function DocsPage({ params }: { params: Promise<{ some: Array<string> }> }) {
    const { some } = await params;
    if (some?.length === 0) {
        return <div>No documentation available.</div>;
    } else if (some?.length === 1) {
        return (
            <div>
                <h1>Documentation: {some[0]}</h1>
                <p>This is the documentation page.</p>
            </div>
        );
    }
    return <div>path is empty. Nothing to show</div>
}