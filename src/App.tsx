import './App.css';
import Footer from './components/footer/Footer';
import BattleField from './components/battleField/BattleField';
import { useBattleState } from './state/useBattleState';
import { TranslationContext } from './context/context';
import Header from './components/header/Header';

const App = () => {
  const {
    setNewGame, 
    turnQty, 
    battleField, 
    fire, 
    isLoading, 
    translations,
    shipLength,
    wreckedСells
  }  = useBattleState();

  return <div className="App">
      <TranslationContext.Provider value={translations}>
        <Header turnQty={turnQty} shipLength={shipLength} wreckedСells={wreckedСells} />
        <BattleField field={battleField} isLoading={isLoading} onFire={fire} />
        <Footer setNewGame={setNewGame} />
      </TranslationContext.Provider>
  </div>
}

export default App;
