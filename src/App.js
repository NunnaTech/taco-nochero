import LandingPage from '../src/views/landing_pages/LandingPage'
import Login from '../src/views/landing_pages/Login'
import Dashboard from '../src/views/landing_pages/Dashboard'
import Register from '../src/views/landing_pages/Register'
import Screen404 from '../src/views/error_pages/404'
import Screen403 from '../src/views/error_pages/403'
import Screen500 from '../src/views/error_pages/500'
import DataTable from '../src/views/datatable/Datatable'
import Profile from '../src/views/landing_pages/Profile'
import RegisterProduct from '../src/views/register_product/RegisterProduct'
import Pricing from '../src/views/pricing/Pricing'
import ProductDetail from '../src/views/detail/Detail'
import ShoppingCart from '../src/views/shopping_cart/ShoppingCart'
import ProductList from '../src/views/product_list/List'
import Payment from '../src/views/payment_pages/payment_view'
import Inbox from '../src/views/email_pages/confirmation_purchase'
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
                <Route exact path="/taco-nochero" component={LandingPage} />
                <Route path="/taco-nochero/register" component={Register} />
                <Route path="/taco-nochero/login" component={Login} />
                <Route path="/taco-nochero/profile" component={Profile} />
                <Route path="/taco-nochero/dashboard" component={Dashboard} />
                <Route path="/taco-nochero/register" component={Register} />
                <Route path="/taco-nochero/registerProduct" component={RegisterProduct} />
                <Route path="/taco-nochero/productDetail" component={ProductDetail} />
                <Route path="/taco-nochero/shoppingCart" component={ShoppingCart} />
                <Route path="/taco-nochero/productList" component={ProductList} />
                <Route path="/taco-nochero/payment" component={Payment} />
                <Route path="/taco-nochero/inbox" component={Inbox} />
                <Route path="/taco-nochero/pricing" component={Pricing} />
                <Route path="/taco-nochero/table" component={DataTable} />
                <Route path="/taco-nochero/403" component={Screen403} />
                <Route path="/taco-nochero/500" component={Screen500} />
                <Route path="/*" component={Screen404} />
            </Switch>
        </Router>
    )
}

export default App;
