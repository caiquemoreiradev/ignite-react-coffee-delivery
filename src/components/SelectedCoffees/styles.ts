import styled from "styled-components";

export const SelectedCoffeesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 40rem;
`;

export const DetailsContainer = styled.section`
  border-radius: 6px 44px 6px 44px;
  display: flex;
  flex-direction: column;
`;

export const ConfirmationSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  padding-bottom: 5rem;
  
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;