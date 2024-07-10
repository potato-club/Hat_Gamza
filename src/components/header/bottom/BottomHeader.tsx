import styled from 'styled-components';

const BottomHeader = () => {

    const ClickToUser  = () => {
        alert('전체 유저 프로필로 이동');
    }

    return (
        <BottomContainer>
            <ToUserProfile>
                <ClickSpan onClick={ClickToUser}>전체 유저 프로필로 이동</ClickSpan>
            </ToUserProfile>
            <YesterdayInfo/>
        </BottomContainer>
    );
};

export default BottomHeader;

const BottomContainer = styled.div`
    height: 80px;
    background-color: gray;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`

const ToUserProfile = styled.div`
background-color: white;
border: 1px solid;
width: 650px;
height: 60px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`

const YesterdayInfo = styled.div`
border: 1px solid;
background-color: white;
width: 650px;
height: 60px;
flex-direction: row;
justify-content: center;
align-items: center;
`

const ClickSpan = styled.span`
font-size: 24px;
cursor:pointer;
`
