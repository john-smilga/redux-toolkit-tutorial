import CardContainer from "../../components/CardContainer"
import { Link } from 'react-router-dom';

export default function Cart() {

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '200px', gap: '10px', margin: '2rem auto', alignItems: 'center' }}>
                <Link to="/" className="btn">GO Home</Link>
            </div>
            <CardContainer />
        </>
    )
}