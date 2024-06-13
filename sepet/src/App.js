import Sepet from './Sepet';
import {UrunProvider} from "./SepetContext"
import UrunListe from './UrunListe';

function App() {
  return (
    <UrunProvider>
      <Sepet/>
        <UrunListe></UrunListe>
    </UrunProvider>
  );
}

export default App;
