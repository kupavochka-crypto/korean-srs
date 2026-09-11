import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import '@shoelace-style/shoelace/dist/themes/light.css';
import '@shoelace-style/shoelace/dist/themes/dark.css';
import './styles.css';
import { registerSW } from 'virtual:pwa-register';
import { applyColorTheme, resolveColorTheme } from './domain/settings';
import { setBasePath } from '@shoelace-style/shoelace';

setBasePath(import.meta.env.BASE_URL + 'shoelace');

registerSW({ immediate: true });

applyColorTheme();

const themeColorMeta = document.querySelector('meta[name="theme-color"]');
const colorScheme = window.matchMedia('(prefers-color-scheme: dark)');
function syncThemeColor() {
  themeColorMeta?.setAttribute('content', resolveColorTheme() === 'dark' ? '#0F1117' : '#F8F9FA');
}
syncThemeColor();
colorScheme.addEventListener('change', () => {
  applyColorTheme();
  syncThemeColor();
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);