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
                <Route exact path="/" component={LandingPage} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <Route path="/profile" component={Profile} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/register" component={Register} />
                <Route path="/registerProduct" component={RegisterProduct} />
                <Route path="/productDetail" component={ProductDetail} />
                <Route path="/shoppingCart" component={ShoppingCart} />
                <Route path="/productList" component={ProductList} />
                <Route path="/payment" component={Payment} />
                <Route path="/inbox" component={Inbox} />
                <Route path="/pricing" component={Pricing} />
                <Route path="/table" component={DataTable} />
                <Route path="/403" component={Screen403} />
                <Route path="/500" component={Screen500} />
                <Route path="/*" component={Screen404} />
            </Switch>
        </Router>
    )
}

export default App;
