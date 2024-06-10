import { Avatar, Stack, Typography } from '@mui/material';
import React from 'react';
import { Face as FaceIcon, AlternateEmail as UserNameIcon, CalendarMonth as CalendorIcon } from '@mui/icons-material'
import moment from 'moment';

const Profile = () => {
    return (
        <Stack spacing={"2rem"} direction={"column"} alignItems={"center"}>
            <Avatar
                sx={{
                    width: 200,
                    height: 200,
                    objectFit: "contain",
                    marginBottom: "1rem",
                    border: "5px solid white"
                }}
            />
            <ProfileCard heading={"Bio"} text={"esse hi kuch bhi likh de, system haiii"} />
            <ProfileCard heading={"Username"} text={"@shhiivvaam"} Icon={<UserNameIcon />} />
            <ProfileCard heading={"Name"} text={"Shivam Kumar Singh"} Icon={<FaceIcon />} />
            <ProfileCard heading={"Joined"} text={moment('2024-11-04T18:30:00:000Z').fromNow()} Icon={<CalendorIcon />} />
        </Stack>
    )
}

const ProfileCard = ({ text, Icon, heading }) => {
    return (
        <Stack
            direction={"row"}
            alignItems={"center"}
            spacing={"1rem"}
            color={"white"}
            textAlign={"center"}
        >

            {Icon && Icon}
            <Stack>
                <Typography variant='body1'>{text}</Typography>
                <Typography color={"gray"} variant='caption'>{heading}</Typography>
            </Stack>

        </Stack>
    );
}

export default Profile;