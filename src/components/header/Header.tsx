import styled from 'styled-components';
import TopHeader from './top/TopHeader';
import BottomHeader from './bottom/BottomHeader';

const Header = () => {
    return (
        <HeadContainer>
            <TopHeader/>
            <BottomHeader/>
        </HeadContainer>
    );
};

export default Header;

const HeadContainer = styled.header`
    height: 240px;
    width: 1440px;
`