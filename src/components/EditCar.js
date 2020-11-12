import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
 
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';


function EditCar(props) {
    const [open, setOpen] = useState(false);
    const [car, setCar] = useState({
        brand: '',
        model: '',
        color: '',
        fuel: '',
        price: '',
        year: ''
    });

    const handleClickOpen = () => {
        console.log(props.params)
        setCar({
            brand: props.params.data.brand,
            model: props.params.data.model,
            color: props.params.data.color,
            fuel: props.params.data.fuel,
            price: props.params.data.price,
            year: props.params.data.year
        });
    
        setOpen(true);
      };
     
      const handleClose = () => {
        setOpen(false);
      };
     
      const inputChanged = (event) => {
        setCar({...car, [event.target.name]: event.target.value})
      }

      const handleSave = () => {
        props.updateCar(props.params.value, car);
        handleClose()
      };
     
  
    return (
        <div>
      <Button size='small' color="primary" onClick={handleClickOpen}>
        Edit
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Update Car</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please provide the info.
          </DialogContentText>
            <TextField
                autoFocus
                name = 'brand'
                value = {car.brand}
                onChange = {inputChanged}
                margin="dense"
                label="Brand"
                fullWidth
            />
            <TextField
                name = 'model'
                value = {car.model}
                onChange = {inputChanged}
                margin="dense"
                label="Model"
                fullWidth
            />
            <TextField
                name = 'color'
                value = {car.color}
                onChange = {inputChanged}
                margin="dense"
                label="Color"
                fullWidth
            />
            <TextField
                name = 'fuel'
                value = {car.fuel}
                onChange = {inputChanged}
                margin="dense"
                label="Fuel"
                fullWidth
            />
            <TextField
                name = 'price'
                value = {car.price}
                onChange = {inputChanged}
                margin="dense"
                label="Price"
                fullWidth
            />
            <TextField
                name = 'year'
                value = {car.year}
                onChange = {inputChanged}
                margin="dense"
                label="Year"
                fullWidth
            />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    );
}

export default EditCar;