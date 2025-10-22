import React, { useState, useRef, useEffect, Suspense } from 'react';
import { Redirect, Route, useLocation } from 'react-router-dom';
import { IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Create from '../../pages/Create';
import EditProfile from '../../pages/EditProfile';
import Scene from '../../pages/Scene';
import Tabs from './Tabs';




const Routes = () => {
  return (
    <IonReactRouter>
     <IonRouterOutlet>
      <Route exact path="/" component={() => <Redirect to="/search" />} />
      <Route exact path="/create" component={Create} />
      <Route exact path="/edit-profile" component={EditProfile} />
      <Route exact path="/scene" component={Scene} />
      <Tabs /> 
     </IonRouterOutlet>   
    </IonReactRouter>
  )
}

export default Routes