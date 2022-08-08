import { Container } from "./styles";

interface CoffeeAdvantagesProps {
    Icon: JSX.Element;
    color: string;
    text: string;
}

export function CoffeeAdvantages({ Icon, text, color }: CoffeeAdvantagesProps) {

    return (
        <Container backgroundColor={color}>

            <div className="icon">
                {Icon}
            </div>

            <span>{text}</span>
        </Container>
    )
}