import {AppRouter} from './router/AppRouter.tsx';
import { PreferencesProvider } from './context/PreferencesContext';
function App() {
    return(
        <PreferencesProvider>
            <AppRouter/>
        </PreferencesProvider>
    )
}

export default App;
