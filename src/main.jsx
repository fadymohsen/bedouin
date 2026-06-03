import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './i18n'
import { HelmetProvider } from 'react-helmet-async'

// Performance mark for app initialization
if (performance.mark) {
  performance.mark('app-init-start');
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
);

// Performance mark for app render complete
if (performance.mark && performance.measure) {
  performance.mark('app-init-end');
  try {
    performance.measure('app-init', 'app-init-start', 'app-init-end');
  } catch (e) {
    // Measurement already exists, skip
  }
}
