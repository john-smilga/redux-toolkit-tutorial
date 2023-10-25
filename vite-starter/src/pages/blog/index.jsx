import { Link } from 'react-router-dom';

export default function Blog() {


    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '200px', gap: '10px', margin: '2rem auto', alignItems: 'center' }}>
                <Link to="/" className="btn">GO Home</Link>
            </div>
            <h3>Blog Page</h3>
        </>
    )
}