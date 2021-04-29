import 'bootstrap/dist/css/bootstrap.min.css';

import { AuthProvider } from './context/context';
import Chatbot from './components/chatbot';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Resultado from './components/resultado';

function App() {

  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/resultado">
            <Resultado />
          </Route>
          <Route path="/">
            <Chatbot />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
