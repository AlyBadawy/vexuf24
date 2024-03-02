// Entry point for the build script in your package.json
import '@hotwired/turbo-rails';

import React from 'react';
import { DashboardApp } from '@/dashboardApp/DashboardApp';
import { createRoot } from 'react-dom/client';

document.addEventListener('turbo:load', () => {
  const rootEl = document.getElementById('react-dashboard-app-root');
  const root = createRoot(rootEl!);

  root.render(
    <React.StrictMode>
      <DashboardApp />
    </React.StrictMode>
  );
});
