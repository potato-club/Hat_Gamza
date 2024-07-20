import { User } from '../../types/User';
import styled from 'styled-components';

interface ProfileProp{
    user: User | null;
}

const ProfileInfo: React.FC<ProfileProp> = ({user}) => {

    return (
        <>
            <Container>
                <ProfileDiv>{user?.name}</ProfileDiv>
                <UserInfoDiv>
                    이름 : {user?.name}<br/>
                    아이디 : {user?.username}<br/>
                    이메일 : {user?.email}<br/>
                    웹사이트 : {user?.website}<br/>
                    가입일 : {user?.createdAt}<br/>
                </UserInfoDiv>
            </Container>
        </>
    );
};

export default ProfileInfo;

const Container = styled.div`
width:380px;
height:120px;
background-color: lightblue;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-evenly;
`

const UserInfoDiv = styled.div`
display: flex;
`

const ProfileDiv = styled.div`
height: 75px;
width: 75px;
border-radius: 50px;
border: 1px solid;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
