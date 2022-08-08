import styled from 'styled-components';

export const Container = styled.header`

    padding: 48px 96px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    div.navigation {

        display: flex;

        div.delivery__local {

            display: flex;
            align-items: center;
            justify-content: center;

            color: #4B2995;
            background-color: #EBE5F9;

            padding: 8px 16px;
            border-radius: 8px;

            margin-right: 8px;

            span {

                margin-left: 8px;
            }

            &:hover {

                cursor: pointer;
                opacity: 0.7;
            }
        }

        div.my__cart {

            display: flex;
            align-items: center;
            justify-content: center;

            padding: 8px 16px;
            border-radius: 8px;

            background-color: #F1E9C9;

            &:hover {

                cursor: pointer;
                opacity: 0.7;
            }
        }
    }
`;