import { Box, AppBar, Toolbar, Typography, IconButton, Tooltip, Backdrop } from '@mui/material'
import { orange } from '../../constants/colors';
import React, { lazy, Suspense, useState } from 'react';
import { Menu as MenuIcon, Search as SearchIcon, Add as AddIcon, Group as GroupIcon, Logout as LogoutIcon, Notifications as NotificationsIcon } from "@mui/icons-material";
import { useNavigate } from 'react-router-dom';
import { LayoutLoader } from './Loaders';

const Search = lazy(() => import('../specific/Search'));
const Notifications = lazy(() => import('../specific/Notifications'));
const NewGroup = lazy(() => import('../specific/NewGroup'));

const Header = () => {

    const navigate = useNavigate();

    const [isMobile, setIsMobile] = useState(false);
    const [isSearch, setIsSearch] = useState(false);
    const [isNewGroup, setIsNewGroup] = useState(false);
    const [isNotification, setIsNotification] = useState(false);

    const handleMobile = () => {
        setIsMobile((prev) => !prev);
    }

    const openSearch = () => {
        setIsSearch((prev) => !prev);
    }

    const openNewGroup = () => {
        setIsNewGroup((prev) => !prev);
    }

    const openNotification = () => {
        setIsNotification((prev) => !prev);
    }

    const navigateToGroup = () => {
        navigate("/groups");
    }

    const logoutHandler = () => {
        console.log("logoutHandler");
    }

    return (
        <>
            <Box sx={{ flexGrow: 1 }} height={"4rem"}>
                <AppBar position='static'
                    sx={{ bgcolor: orange }}
                >
                    <Toolbar>
                        <Typography variant='h6' sx={{ display: { xs: "none", sm: "block" } }}>
                            Chat App
                        </Typography>
                        <Box sx={{ display: { xs: "block", sm: "none" } }}>
                            <IconButton color='inherit' onClick={handleMobile}>
                                <MenuIcon />
                            </IconButton>
                        </Box>
                        <Box sx={{ flexGrow: 1 }} />     {/* this is just to handle the mid space, since this Box will take all the space in betwen the IconButton Box and the below Box */}
                        <Box>
                            <IconBtn title="Search" icon={<SearchIcon />} onClick={openSearch} />
                            <IconBtn title="New Group" icon={<AddIcon />} onClick={openNewGroup} />
                            <IconBtn title="Manage Groups" icon={<GroupIcon />} onClick={navigateToGroup} />
                            <IconBtn title="Notifictions" icon={<NotificationsIcon />} onClick={openNotification} />
                            <IconBtn title="Logout" icon={<LogoutIcon />} onClick={logoutHandler} />
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>

            {
                // isSearch && <Search />
                isSearch && (
                    // <Suspense fallback={<LayoutLoader />} >
                    <Suspense fallback={<Backdrop open />} >
                        <Search />
                    </Suspense>
                )
            }
            {
                isNotification && (
                    <Suspense fallback={<Backdrop open />} >
                        <Notifications />
                    </Suspense>
                )
            }
            {
                isNewGroup && (
                    <Suspense fallback={<Backdrop open />} >
                        <NewGroup />
                    </Suspense>
                )
            }
        </>
    )
}

const IconBtn = ({ title, icon, onClick }) => {
    return (
        <Tooltip title={title}>     {/* Tooltip -> It just add a description of some IconsButtons, etc when we hover */}
            <IconButton color='inherit' size='large' onClick={onClick}>
                {icon}
            </IconButton>
        </Tooltip>
    );
}

export default Header;