import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './../components/Header';
import ExpenseDashBoardPage from './../components/Dashboard';
import AddExpensePage from './../components/AddExpense';
import EditExpensePage from './../components/EditExpense';
import HelpExpensePage from './../components/Help';
import NotFoundPage from './../components/NotFound';


const AppRouter =() =>(
    <BrowserRouter>
    <div>
    <Header />
    <Switch>

    <Route component={NotFoundPage} />
    </Switch>
    </div>
    </BrowserRouter>

);

export default AppRouter;