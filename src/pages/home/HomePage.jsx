



export const HomePage = () => {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', maxHeight: '600px' }}>
            <div style={{ margin: '2rem 1rem', gap: '2rem', display: "grid", gridTemplateRows: 'auto 1fr auto' }}>
                <h2 style={{ color: '#ccc' }}>calcula tus envios </h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, nobis maiores illo unde velit mollitia.</p>
                <button>start trial</button>
            </div>
            <img src="#" alt="meg" style={{ border: '1px solid white', margin: '2rem 1rem' }} />
        </div>
    )
}