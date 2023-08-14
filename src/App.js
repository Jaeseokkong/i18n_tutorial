import './App.css';
import { useTranslation, Trans } from 'react-i18next';

const lngs = {
  en : { nativeName : "English"},
  kr : { nativeName : "Korean"}
}

function App() {
  const { t, i18n } = useTranslation();

  return (
    <div className="App">
      <div>
        {Object.keys(lngs).map((lng) => (
          <button 
            type="submit" 
            key={lng} 
            onClick={() => i18n.changeLanguage(lng)} 
            disabled={i18n.resolvedLanguage === lng}
          >
            {lngs[lng].nativeName}
          </button>
        ))}
      </div>
      <Trans i18nKey="description">
        Edit <code>src/App.js</code> and save to reload
      </Trans>
      <br/>
      {t('learn')}
    </div>
  );
}

export default App;
