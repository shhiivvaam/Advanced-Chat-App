import React, { memo } from 'react'
import { Link } from '../StyledComponents'
import { Box, Stack, Typography } from '@mui/material'

const ChatItem = ({
    avatar = [],
    name,
    _id,
    groupChat = false,
    sameSender,
    isOnline,
    newMessageAlert,
    index = 0,
    handleDeleteChatOpen,
    // lastMessage
}) => {
    return (
        <Link
            to={`/chat/${_id}`}
            onContextMenu={(e) => handleDeleteChatOpen(e, _id, groupChat)}
        >
            <div style={{
                display: "flex",
                gap: "1rem",
                alignItems: "center",
                padding: "1rem",
                backgroundColor: sameSender ? "black" : "unset",
                color: sameSender ? "black" : "unset",
                borderBottom: "1px solid #f0f0f0",
                justifyContent: "space-between",
                position: "relative"
            }}>
                {/* Avatar Card */}
                <Stack>
                    <Typography>{name}</Typography>
                    {
                        newMessageAlert && (
                            <Typography>{newMessageAlert.count} New Message</Typography>
                        )
                    }
                </Stack>
                {
                    isOnline && (
                        <Box
                            sx={{
                                width: "10px",
                                height: "10px",
                                borderRadius: "50%",
                                backgroundColor: "green",
                                position: "absolute",
                                top: "50%",
                                right: "1rem",
                                transform: "translateY(-50%)",
                                // color: "white",
                                // display: "flex",
                                // alignItems: "center",
                                // justifyContent: "center",
                                // fontSize: "0.8rem"
                            }}
                        />
                    )
                }
            </div>
        </Link>
    )
}

export default memo(ChatItem);