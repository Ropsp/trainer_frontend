import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

export default function AddTraining(props) {

    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/api/customers')
          .then((response) => response.json())
          .then((data) => {
            setCustomer(data.content)
          })
      };

    const [open, setOpen] = useState(false);
    const [customer, setCustomer] = useState([]);
    const [training, setTraining] = React.useState({ activity: '', date: new Date(), duration: ''
    });

    const handleInputChange = (e) => {
        setTraining({ ...training, [e.target.name]: e.target.value});
    };

    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    const addTraining = () => {
        props.saveTraining(training);
        handleClose();
    };

    return (
        <div>
            <Button 
            size="small" 
            color="primary" 
            onClick={handleClickOpen}>Add a new training
            </Button>

            <Dialog open={open} onClose={handleClose}>
                <DialogContent>
                    <TextField
                    margin="normal"
                    variant="outlined"
                    style={{marginBottom: 10}}
                    label="Date"
                    onChange={(e) => handleInputChange(e)}
                    name="date"
                    type="datetime-local"
                    value={training.date}
                    />
                    
                     <TextField
                    margin="normal"
                    variant="outlined"
                    style={{marginBottom: 10}}
                    label="Duration"
                    onChange={(e) => handleInputChange(e)}
                    name="duration"
                    value={training.duration}
                    />

                    <TextField
                    id="outlined-basic"
                    margin="normal"
                    variant="outlined"
                    style={{marginBottom: 10}}
                    label="Activity"
                    onChange={(e) => handleInputChange(e)}
                    name="activity"
                    value={training.activity}
                    />

                    <TextField
                    select
                    margin="normal"
                    name="customer"
                    onClick={fetchData}
                    value={training.customer}
                    onChange={(e) => handleInputChange(e)}
                    helperText="Customer"
                    >
                        {customer.map(customer => (
                            <MenuItem value={customer.links[0].href}
                            key={customer.links[0].href}>
                                {customer.firstname} {customer.lastname}
                            </MenuItem>
                        ))}
                        </TextField>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button autofocus onClick={addTraining} color="primary">
                            Add
                        </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}