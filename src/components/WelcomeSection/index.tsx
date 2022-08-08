import { CoffeeAdvantages } from "../CoffeeAdvantages";
import { FaAward, FaBox, FaCoffee, FaShoppingCart, } from 'react-icons/fa';

import { Container } from "./styles";

import WelcomeSectionMainImage from '../../assets/intro-img.png';

export function WelcomeSection() {

    return (
        <Container>

            <div className="left">
                <h2>Encontre o café perfeito para qualquer hora do dia</h2>

                <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>

                <div className="welcome__section__footer">
                    <CoffeeAdvantages
                        text='Compra simples e segura'
                        color='#C47F17'
                        Icon={<FaShoppingCart color="#fff" />}
                    />

                    <CoffeeAdvantages
                        text='Embalagem mantém o café intacto'
                        color='#DBAC2C'
                        Icon={<FaBox color="#fff" />}
                    />

                    <CoffeeAdvantages
                        text='O café chega fresquinho até você'
                        color='#8047F8'
                        Icon={<FaCoffee color="#fff" />}
                    />

                    <CoffeeAdvantages
                        text='Produtos de qualidade e excelência no serviço'
                        color='#574F4D'
                        Icon={<FaAward color="#fff" />}
                    />
                </div>
            </div>

            <div className="right">
                <img src={WelcomeSectionMainImage} alt="main image coffe" />
            </div>
        </Container>
    )
}