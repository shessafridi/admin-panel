import React from 'react';

import AdminPanel from './components/AdminPanel';
import loggerService from './services/loggerService';

function App() {
  return <AdminPanel />;
}

export default loggerService.withLogger(App);
