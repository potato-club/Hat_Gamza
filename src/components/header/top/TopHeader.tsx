import styled from 'styled-components';
import Profile from './Profile';

const TopHeader = () => {

    const IconClick = () => {
        alert('페이지 첫 화면으로');
    }

    return (
        <TopContainer>
            <GamzaIcon onClick={IconClick}/>
            <CenterImage/>
            <Profile/>
        </TopContainer>
    );
};

export default TopHeader;

const TopContainer = styled.div`
    height: 80px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`

const GamzaIcon = styled.div`
    cursor: pointer;
    width: 80px;
    height: 80px;
    background-image: url('/images/gamza.png');
    background-size: cover;
`

const CenterImage = styled.div`
    width: 900px;
    height: 80px;
    background-color: black;
    background-image: url('/images/banner.png');
    background-size: cover;
`
