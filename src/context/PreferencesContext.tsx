import { createContext, useContext, useState } from 'react';

// props que solo devuelve true o false showCompleted es un estado de react que solo devuelve booleanos y empieza siempre en true
type PreferencesContextProps = {
    showCompleted: boolean;
}

const PreferencesContext = createContext<PreferencesContextProps>({
    showCompleted: true
});
// react node es un renderizador aqui children le avisa al componente padre y se renderiza
//showCompleted es una pregunta que te devuelve un boleano como que hace una pregunta ¿esta tarea esta completa? si o no true o false
// se envuelve children dentro de la funcion preferenceprovider con los valores del estado para que estos hagan la pregunta
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
    return useContext(PreferencesContext); //useContext busca hacia arriba y encuentra el Provider
}