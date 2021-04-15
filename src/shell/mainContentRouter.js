import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";
import InformationPage from "../pages/informationPage/informationPage";
import LandingPage from "../pages/landingpage/landingPage";
import StartPage from "../pages/startPage/startPage";

export default function MainContentRouter() {
    return (
        <Switch>

            <Route path="/information">
                <InformationPage/>
            </Route>

            <Route path="/begin">
                <StartPage/>
            </Route>

            <Route path="/">
                <LandingPage/>
            </Route>
            
        </Switch>
    )
}