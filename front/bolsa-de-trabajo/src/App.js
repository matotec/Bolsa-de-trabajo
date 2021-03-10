import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import FormAlum from './formAlum';
import FormEmp from './formEmp';
import SearchAlum from './searchAlum';
import SearchEmp from './searchEmp';
import Login from './login';
import PageInicio from './pageInicio';
import ChargeJob from './chargeJob';
import PageApprove from './pageApprove';
import ConfirmAlum from './confirmAlum';
import ConfirmJob from './confirmJob';

function App() {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={PageInicio}/>
        <Route path="/formAlum" component={FormAlum}/>
        <Route path="/formEmp" component={FormEmp}/>
        <Route path="/searchAlum" component={SearchAlum}/>
        <Route path="/searchEmp" component={SearchEmp}/>
        <Route path="/login" component={Login}/>
        <Route path="/chargeJob" component={ChargeJob}/>
        <Route path="/pageApprove" component={PageApprove}/>
        <Route path="/confirmAlum" component={ConfirmAlum}/>
        <Route path="/confirmJob" component={ConfirmJob}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App;