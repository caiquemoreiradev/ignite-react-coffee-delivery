import styled from "styled-components";

interface ContainerProps {
    backgroundColor: string;
}

export const Container = styled.div<ContainerProps>`

    display: flex;
    align-items: center;

    padding: 8px;

    div.icon {

        display: flex;
        align-items: center;
        justify-content: center;

        margin-right: 8px;

        background-color: ${({ backgroundColor }) => backgroundColor};

        padding: 8px;
        border-radius: 16px;
    }
`;