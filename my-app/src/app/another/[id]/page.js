export default async function AnotherPage({ params }) {
    const { id } = await params;
    
    return (
        <div className="w-screen h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Another Page with ID: {id}</h1>
        </div>
    );
}