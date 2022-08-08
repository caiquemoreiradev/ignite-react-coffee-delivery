import { OurCoffees } from "../../components/OurCoffees";
import { WelcomeSection } from "../../components/WelcomeSection";
import { HomeContainer } from "./styles";

export function HomePage() {
  return (
    <HomeContainer>
      <WelcomeSection />

      <OurCoffees />
    </HomeContainer>
  );
}