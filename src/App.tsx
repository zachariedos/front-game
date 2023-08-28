import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {BrowserRouter,} from "react-router-dom";
import {QueryClient, QueryClientProvider,} from '@tanstack/react-query'
import i18next from "i18next";
import {initReactI18next} from "react-i18next";
import detector from 'i18next-browser-languagedetector'
import styles from "./Styles/App.module.scss"
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// ----------- Import des fichiers de trad ----------------
import common_fr from "./i18n/fr/common.json"
import configuration_fr from "./i18n/fr/configuration.json"
import common_en from "./i18n/en/common.json"
import configuration_en from "./i18n/en/configuration.json"
import Index from "./Pages";
import {useEffect} from "react";
import Topbar from "./Component/Topbar";
// --------------------------------------------------------

library.add(fas)

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: true,
        },
    },
})

/**
 * Bloc qui gère la traduction
 * Lorsqu'un nouveau fichier est créé dans le dossier src/i18n, l'importer au-dessus et le déclarer ci-dessous
 */
i18next
    .use(detector)
    .use(initReactI18next)
    .init({
        ns: ['common'],
        defaultNS: 'common',
        resources: {
            fr: {
                common: common_fr,
                configuration: configuration_fr,
            },
            en: {
                common: common_en,
                configuration: configuration_en,
            }
        },
        fallbackLng: ['fr'],
        interpolation: {
            format: function (value, format, lng) {
                if (format === 'uppercase') return value.toUpperCase();
                if (format === 'lowercase') return value.toLowerCase();
                return value;
            }
        }
    })




function App() {

    return (
        <QueryClientProvider client={queryClient}>
            <ToastContainer autoClose={3000} closeOnClick/>
            <div className={`${styles.Container} bg-light-principal dark:bg-dark-principal `}>
                <BrowserRouter>
                    <Topbar/>
                    <Index/>
                </BrowserRouter>
            </div>
        </QueryClientProvider>
    )
}

export default App
