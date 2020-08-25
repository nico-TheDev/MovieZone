import styled from 'styled-components';
import Title from '../shared/Title';
import Container from '../shared/Container';

const SliderContainer = styled.div`
    height:auto;
`;

const SliderTitle = styled(Title)`
    margin-bottom:1rem;
    font-size:1.3rem;
`;

const Holder = styled(Container)`
    padding:20px 0;
`;

export { SliderContainer, SliderTitle,Holder }