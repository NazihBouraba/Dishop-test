import React from 'react';
import {Switch ,Route} from 'react-router-dom';
import HomeComponent from '../component/home/HomeComponent'
import FilmComponent from '../component/film/FilmComponent'

export default function Routes() {

    return (
        <Switch>

            <Route path="/" component ={HomeComponent}  ></Route>

            <Route path="../component/film/FilmComponent.js" component ={FilmComponent}  ></Route>

        </Switch>


    )
    
}