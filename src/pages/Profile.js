import React from 'react';
import styled from 'styled-components';

import ProfileHeader from '../components/Headers/ProfileHeader';
import ProfileDetails from '../components/ProfileDetails';

import COLORS from '../styles/colors';

const Profile = () => {
  return (
    <Container>
        <ProfileHeader />
        <ProfileDetails />
    </Container>
  )
}

const Container = styled.div`
    background-color: ${COLORS.white};
`;

export default Profile;