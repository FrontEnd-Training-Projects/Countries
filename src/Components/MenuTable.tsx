import { Box, IconButton, Menu, MenuItem } from '@mui/material'
import React, { useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { optionsMenu } from '../Utils/constants';

const MenuTable = () => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleCloseMenuItem = (event:  React.ChangeEvent) => {
		handleClose();
		console.log(event.currentTarget);
	};

	return (
		<Box sx={{display: 'inline-block'}}>
			<IconButton
				onClick={handleClick}
			>
				<MoreVertIcon />
			</IconButton>
			<Menu
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				sx={{ '& .MuiMenu-paper': { boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px' } }}
			>
				{optionsMenu.map((option) => (
					<MenuItem key={option} onClick={event => handleCloseMenuItem}>
						{option}
					</MenuItem>
				))}
			</Menu>
		</Box>
	)
}

export default MenuTable