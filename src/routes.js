import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Project01 from './pages/Project01';
import Project02 from './pages/Project02';
import Project03 from './pages/Project03';
import Project04 from './pages/Project04';
import Project05 from './pages/Project05';
import Project06 from './pages/Project06';
import Project07 from './pages/Project07';
import Project08 from './pages/Project08';
import Project09 from './pages/Project09';


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/iara-vidal" exact component={Home} />
                <Route path="/sobre" component={Sobre} />
                <Route path="/project01" component={Project01} />
                <Route path="/project02" component={Project02} />
                <Route path="/project03" component={Project03} />
                <Route path="/project04" component={Project04} />
                <Route path="/project05" component={Project05} />
                <Route path="/project06" component={Project06} />
                <Route path="/project07" component={Project07} />
                <Route path="/project08" component={Project08} />
                <Route path="/project09" component={Project09} />  

            </Switch>
        </BrowserRouter>
    );
}