import { useCart } from "../../hooks/useCart";
import { CoffeeCard } from "../CoffeeCard";
import { TitleText } from "../Typography";
import { ConfirmationSection } from "./ConfirmSection";
import { DetailsContainer, SelectedCoffeesContainer } from "./styles";

export function SelectedCoffees() {
  const { cartItems } = useCart();

  return (
    <SelectedCoffeesContainer>
      <TitleText size="xs" color="subtitle">
        Cafés selecionados
      </TitleText>

      <DetailsContainer>
        {cartItems.map((item) => (
          <CoffeeCard key={item.id} coffee={item} />
        ))}

        <ConfirmationSection />
      </DetailsContainer>
    </SelectedCoffeesContainer>
  );
}