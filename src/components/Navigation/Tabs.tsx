import React, { useState, useRef, useEffect, Suspense } from 'react';
import { Route, useLocation } from 'react-router-dom';
import {
  IonIcon,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  useIonRouter
} from '@ionic/react';
import { addCircle, searchOutline, search, personCircle, personCircleOutline } from 'ionicons/icons';
import Search from '../../pages/Search';
import Create from '../../pages/Create';
import Profile from '../../pages/Profile';



const Tabs = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route exact path="/search" component={Search} />
        <Route path="/profile" component={Profile} />
      </IonRouterOutlet>
      <IonTabBar className='tabs' slot="bottom">
        <IonTabButton tab="tab1" href="/search">
          <IonIcon size='small' aria-hidden="true" color='dark' icon={location.pathname === '/search' ? search : searchOutline} />
        </IonTabButton>
        <IonTabButton tab="tab2" href='/scene'>
          <IonIcon aria-hidden="true" color='dark' icon={addCircle} size='large' />
        </IonTabButton>
        <IonTabButton tab="tab3" href="/profile">
          <IonIcon size='small' aria-hidden="true" color='dark' icon={location.pathname === '/profile' ? personCircle : personCircleOutline} />
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  )
}

export default Tabs