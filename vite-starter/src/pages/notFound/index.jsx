import { Link } from 'react-router-dom';


export default function NotFound() {
    return (
      <>
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '200px', gap: '10px', margin: '2rem auto', alignItems: 'center' }}>
            <Link to="/cart" className="btn">GO to Cart</Link>
            <Link to="/blog" className="btn">GO to Blog</Link>
        </div>
        <div>404 Not Found</div>
      </>
    )
  }
  