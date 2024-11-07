import React from "react";
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

import SampleSurvey from "./SampleSurvey";
import Home from "./Home";
import Inventory from "./Inventory";
import InventoryReport from "./InventoryReport";

const SurveyRoutes = () => {
    return (
        <BrowserRouter>
            <div>
                <NavLink to="/">Home</NavLink>
                {' '}|{' '}
                <NavLink to="sample">Sample</NavLink>
                {' '}|{' '}
                <NavLink to="inventory">Inventory</NavLink>
                {' '}|{' '}
                <NavLink to="report">Report</NavLink>
            </div>
            <Switch>
                <Route path="/sample">
                    <SampleSurvey />
                </Route>
                <Route path="/inventory">
                    <Inventory />
                </Route>
                <Route path="/report">
                    <InventoryReport />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default SurveyRoutes;
