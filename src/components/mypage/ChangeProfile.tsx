import React from 'react';
import styled from 'styled-components';

const ChangeProfile = () => {
    return (
        <>
            <ChangeButton>
                프로필 변경
            </ChangeButton>
        </>
    );
};

export default ChangeProfile;

const ChangeButton = styled.button`
height: 50px;
`