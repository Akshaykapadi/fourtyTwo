import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function search(props){
    return(
        <div>
        <TextField id="outlined-basic"  variant="outlined" style={{paddingLeft:'35%',paddingTop:10}} placeholder="Mobile No"  onChange={((e) => props.query(e))} />
        <Button variant="contained" color="primary" style={{marginLeft:20,marginTop:15}} onClick={(()=>props.filter())}>
            Filter
        </Button>
        </div>
    );
}