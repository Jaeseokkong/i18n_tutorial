import './App.css';
import { useTranslation, Trans } from 'react-i18next';

function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <Trans i18nKey="description">
        
      </Trans>
      <br/>
      {t('learn')}
    </div>
  );
}

export default App;
