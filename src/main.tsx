import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import '@shoelace-style/shoelace/dist/themes/light.css';
import '@shoelace-style/shoelace/dist/themes/dark.css';
import './styles.css';
import { registerSW } from 'virtual:pwa-register';
import { applyColorTheme, storedColorTheme } from './domain/settings';
import { setBasePath } from '@shoelace-style/shoelace';

setBasePath(import.meta.env.BASE_URL + 'shoelace');

registerSW({ immediate: true });

applyColorTheme();

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
  if (storedColorTheme() === 'system') applyColorTheme('system');
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);