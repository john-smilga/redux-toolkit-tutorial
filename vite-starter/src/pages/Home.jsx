import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import Item from '../components/Item';

export default function Home() {
    const { products } = useSelector(store => store.products)

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '200px', gap: '10px', margin: '2rem auto', alignItems: 'center' }}>
                <Link to="/cart" className="btn">GO to Cart</Link>
                <Link to="/blog" className="btn">GO to Blog</Link>
            </div>

            <h3>This is Home Page</h3>

            <div>
                <section className="cart">
                    <header>
                        <h2>Items</h2>
                    </header>
                    <div>
                        {products.map((item) => (
                            <Item key={item.id} {...item} />
                        ))}
                    </div>
                </section>
            </div>
        </>
    )
}