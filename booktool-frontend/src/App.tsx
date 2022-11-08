import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { ChakraProvider } from '@chakra-ui/react'

import { persistor, store } from '@/Store/Reducers/store'
import RootComponent from './RootComponent'
import Theme from "@Constants/theme.constants";

const App: React.FC = () => {
    return (
        <ChakraProvider theme={Theme}>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <RootComponent />
                </PersistGate>
            </Provider>
        </ChakraProvider>
    )
}

export default App
