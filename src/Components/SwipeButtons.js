import React from 'react'
import './SwipeButtons.css'
import ReplyIcon from '@material-ui/icons/Reply';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import { IconButton } from '@material-ui/core';

function SwipeButtons() {
    return (
        <div className = "swipeButtons">
            <IconButton className = "swipeButtons-repeat">
                <ReplyIcon fontSize = "large" />
            </IconButton>
            <IconButton className="swipeButtons-left">
                <CloseIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipeButtons-star">
                <StarRateIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipeButtons-right">
                <FavoriteIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipeButtons-lightening">
                <FlashOnIcon fontSize="large" />
            </IconButton>
            
        </div>
    )
}

export default SwipeButtons
