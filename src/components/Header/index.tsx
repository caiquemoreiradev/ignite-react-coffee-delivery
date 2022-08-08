import { FaMapMarkerAlt, FaShoppingCart } from 'react-icons/fa';

import { Container } from "./styles";

import CoffeeDeliveryLogo from '../../assets/coffee-delivery-logo.svg';
import { Link } from 'react-router-dom';

export function Header() {

    return (
        <Container>

            <div className="logo">
                <img src={CoffeeDeliveryLogo} alt="logo coffee delivery" />
            </div>

            <div className="navigation">

                <div className="delivery__local">
                    <FaMapMarkerAlt name="location" size={20} color="#4B2995" />
                    <span>São Paulo, SP</span>
                </div>

                <div className="my__cart">
                    <Link to='/completeOrder'>
                    <FaShoppingCart name="location" size={20} color="#C47F17" />
                    </Link>
                </div>
            </div>
        </Container>
    )
}