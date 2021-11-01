import { MdAccountBalance } from "react-icons/md";
import TacoButton from "./commons/TacoButton";
import TacoButtonIcon from "./commons/TacoButtonIcon";
import TacoInput from "./commons/TacoInput";
import LandingPage from '../src/views/landing_pages/LandingPage'
import Login from '../src/views/landing_pages/Login'
import Register from '../src/views/landing_pages/Register'
import Screen404 from '../src/views/error_pages/404'
import Screen403 from '../src/views/error_pages/403'
import Screen500 from '../src/views/error_pages/500'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={LandingPage} />
                <Router path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <Route path="/403" component={Screen403} />
                <Route path="/500" component={Screen500} />
                <Route path="/*" component={Screen404} />
            </Switch>
        </Router>
    )
}

export default App;
