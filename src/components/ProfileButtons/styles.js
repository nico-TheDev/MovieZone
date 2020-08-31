import styled from 'styled-components';
import Button from '../shared/Button';

export const MovieButton = styled(Button)`
    display: flex;
    align-items: center;

    svg{
        margin-right:5px;
    }
`;

export const ButtonHolder = styled.div`
    width:100%;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    align-items:center;
`