import React from 'react';
import { Router } from '@reach/router';
import Tracker from '../components/tracker';

const TrackerPage = () => (
  <Router>
    <Tracker path="/tracker" />
    <Tracker path="/tracker/:route" />
    <Tracker path="/tracker/:route/:direction" />
    <Tracker path="/tracker/:route/:direction/:stop" />
  </Router>
);

export default TrackerPage;
