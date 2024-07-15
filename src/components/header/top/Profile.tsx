import { useEffect, useState } from "react";
import styled from "styled-components";
import { User } from "../../../types/User";
import { fetchUser } from "../../../api/fetchUser";

const Profile = () => {

  const [user,setUser] = useState<User | null>(null);

  useEffect(()=>{
    const fetchData = async() => {
      try {
        const fetchUserData = await fetchUser();
        setUser(fetchUserData);  
      } catch (error) {
        throw error;
      }
    }
    fetchData();
  },[]);

  const ClickMyFile = () => {
    alert('내 프로필로 이동');
  }

  return (
    <ProfileContainer>
      <ProfileImg onClick={ClickMyFile}>
        {user?.name}
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
