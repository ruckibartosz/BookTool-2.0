import React from 'react'
import { Provider } from 'react-redux'
import { ChakraProvider } from '@chakra-ui/react'

import { store } from '@Store/store'
import RootComponent from './RootComponent'
import Theme from "@Constants/theme.constants";

const App: React.FC = () => {
    return (
        <ChakraProvider theme={Theme}>
            <Provider store={store}>
                    <RootComponent />
            </Provider>
        </ChakraProvider>
    )
}

export default App
