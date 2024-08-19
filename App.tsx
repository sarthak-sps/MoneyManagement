import { Provider } from "react-redux";
import Navigation from "./src/navigation/navigation"
import { store, persistor } from "./src/redux/store";
import { PersistGate } from "redux-persist/integration/react";

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Navigation />  
            </PersistGate>
        </Provider>
    )
}
export default App;