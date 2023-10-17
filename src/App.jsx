import React, { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './assets/css/App.css'
import './assets/css/Responsive/Responsive.css'
import AllRoutes from './allroutes';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import tEn from './component/multilingual/en/transaltion.json'
import tHi from './component/multilingual/hi/transaltion.json'
import hindi_video from './assets/video/video_medium.mp4'
import english_video from './assets/video/english_video.mp4'

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      // or even better, manage them via a UI: https://react.i18next.com/guides
      en: {
        translation: tEn
      },
      ve: {
        translation: {
          videoTitle: 'Video in English',
          videoURL: english_video,
        },
      },
      hi: {
        translation: tHi
      },
      vi_hi: {
        translation: {
          videoTitle: 'Video in hindi',
          videoURL: hindi_video,
        },
      },
    },
    lng: "vi_hi" && "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "vi_hi" && "en",

    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });

// i18n
//   .use(initReactI18next)
//   .init({
//     resources: {
//       en_vi: {
//         translation: {
//           videoTitle: 'Video in English',
//           videoURL: english_video,
//         },
//       },
//       hi_vi: {
//         translation: {
//           videoTitle: 'Video in hindi',
//           videoURL: hindi_video,
//         },
//       },
//     },
//     lng: 'hi_vi', // Set the default language
//     fallbackLng: 'hi_vi',
//   });

export const changeLang = (l) => {

  return i18n.changeLanguage(l);

}
function App() {
  const { t } = useTranslation();
  return (
    <div className="App">
      <BrowserRouter>
        <AllRoutes />
      </BrowserRouter>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
