import styled from "styled-components";
import UserProfile from "../../../api/UserProfile";

const Profile = () => {

  const ClickMyFile = () => {
    alert('내 프로필로 이동');
  }

  return (
    <ProfileContainer>
      <ProfileImg onClick={ClickMyFile}>
        <UserProfile/>
      </ProfileImg>
    </ProfileContainer>
  );
};

export default Profile;

const ProfileContainer = styled.div`
  width: 200px;
  height: 70px;
  border-radius: 10px;
  background-color: gray;
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
`;

const ProfileImg = styled.div`
  cursor: pointer;
  border-radius: 50px;
  background-color: white;
  width: 50px;
  height: 50px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
