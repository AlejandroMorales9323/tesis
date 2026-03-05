import {AppRouter} from './router/AppRouter.tsx';
import { PreferencesProvider } from './context/PreferencesContext';
// se importa en la app la funcion que hicimos dentro de preferencescontext
// y se envuelve el approuter con la funcion preference provider
function App() {
    return(
        <PreferencesProvider>
            <AppRouter/>
        </PreferencesProvider>
    )
}

export default App;
