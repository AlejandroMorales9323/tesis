import { createContext, useContext, useState } from 'react';

// props que solo devuelve true o false showCompleted es un estado de react que solo devuelve booleanos y empieza siempre en true
type PreferencesContextProps = {
    showCompleted: boolean;
}

const PreferencesContext = createContext<PreferencesContextProps>({
    showCompleted: true
});
// children da aviso al padre y react node renderiza en pantalla
//
export function PreferencesProvider({ children }: {children: React.ReactNode }) {
    const [showCompleted, setShowCompleted] = useState<boolean>(true);
    return (
        <>
            <PreferencesContext.Provider value={{showCompleted, setShowCompleted}}>
                {children}
            </PreferencesContext.Provider>

        </>
    )
}
// va fuera por que es una funcion independiente
export function usePreferences() {
    return useContext(PreferencesContext); //useContext busca hacia arriba y encuentra el Provider hay una funcion de por medio y estados que pueden buscarse en cualequier lado para no repetir codigo
}