import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import { User } from '../../types/User';
import axios from 'axios';

interface ChangeProp{
    user: User| null;
}

const ChangeProfile:React.FC<ChangeProp> = ({user}) => {
    const [isModal, setIsModal] = useState<boolean>(false);
    const [newName, setNewName] = useState<string>('');

    const handleOpenModal = () => {
        setIsModal(true);
    }
    const handleCloseModal = () => {
        setIsModal(false);
    }
    const handleInputName = (e:React.ChangeEvent<HTMLInputElement>) => {
        setNewName(e.target.value);
    }
    const handlePutName = async() => {
        try {
            await axios.put('https://koreanjson.com/users/1',{
                name: newName,
                
            })
        } catch (error) {
            throw error;
        }
        console.log({newName},'으로 변경');
    }
    return (
        <>
            <ChangeButton onClick={handleOpenModal}>
                프로필 변경
            </ChangeButton>
            <Modal
                isOpen={isModal}
                onRequestClose={handleCloseModal}
                style={mystyle}                
                >
                <Modaldiv>
                    <Topdiv>
                        <Spans>프로필 수정</Spans>
                        <CloseBtn onClick={handleCloseModal}>X</CloseBtn>
                    </Topdiv>
                    <ProfileDiv>
                        {user?.name}
                    </ProfileDiv>
                    <InputName 
                    placeholder='수정할 이름을 입력'
                    onChange={handleInputName}/>
                    <BtnDiv>
                        <OkBtn onClick={handlePutName}>확인</OkBtn>
                        <OkBtn onClick={handleCloseModal}>취소</OkBtn>    
                    </BtnDiv>
                </Modaldiv>
            </Modal>
        </>
    );
};

export default ChangeProfile;

const ChangeButton = styled.button`
height: 50px;
`

const CloseBtn = styled.button`
cursor: pointer;
border: none;
`

const mystyle = {
    content:{
        display: 'flex',
        width: '400px',
        height: '400px',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
    },
    overlay: {
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
}

const Topdiv = styled.div`
width: 400px;
height: 20px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-self: flex-start;
`

const Spans = styled.span`
    font-size: 14px;
`

const Modaldiv = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
`

const ProfileDiv = styled.div`
height: 150px;
width: 150px;
border-radius: 100px;
border: 1px solid;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 75px;
`

const InputName = styled.input`
    margin-top: 20px;
    font-size: 20px;
    padding: 5px;
`

const OkBtn = styled.button`
font-size: 20px;
`

const BtnDiv = styled.div`
display: flex;
flex-direction:row;
justify-content: flex-end;
width: 240px;
margin-top: 10px;
`