import React , { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import MovieIcon from '@material-ui/icons/Movie';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';




class FilmHeaderComponent extends Component {


 render() {
    return (
    <div>
        <AppBar position="relative">
            <Toolbar>
            <MovieIcon className="icon" />
            <Typography variant="h6" color="indigo darken-3" noWrap>
                DISHOP MOVIES STORE 
            </Typography>
            </Toolbar>
        </AppBar>

    </div>
    )
 }
      
 


}
export default FilmHeaderComponent