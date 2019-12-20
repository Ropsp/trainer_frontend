import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AppBar from '@material-ui/core/AppBar';




export default function SimpleMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
        
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Select Page
      </Button>
      
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem>
    
<li class="nav-item">
  <a class="nav-link" href="/trainings" style={{color: "black"}}>Trainings</a>
</li>
        </MenuItem>
        <MenuItem>
          <li class="nav-item">
  <a class="nav-link" style={{color: "black"}} href="/">Customers</a>
</li>
        </MenuItem>
        <MenuItem>
    
        </MenuItem>
      </Menu>
      
    </div>
  );
  }