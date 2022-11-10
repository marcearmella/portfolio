import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import lang_es from './lang/es/global.json';
import lang_en from './lang/en/global.json';

i18next.init({
    interpolation: { escapeValue: false },
    lng: 'es',
    resources: {
        es: {
            lang: lang_es
        },
        en: {
            lang: lang_en
        }
    }
});

ReactDOM.createRoot(document.getElementById('root')).render(
    <I18nextProvider i18n={i18next} >
        <App />
    </I18nextProvider>
)