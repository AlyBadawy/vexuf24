// Entry point for the build script in your package.json
import '@hotwired/turbo-rails';

import React from 'react';
import { createRoot } from 'react-dom/client';
import { AdminApp } from '@/adminApp/AdminApp';

document.addEventListener('turbo:load', () => {
  const rootEl = document.getElementById('react-admin-app-root');
  const root = createRoot(rootEl!);

  root.render(
    <React.StrictMode>
      <AdminApp />
    </React.StrictMode>
  );
});
