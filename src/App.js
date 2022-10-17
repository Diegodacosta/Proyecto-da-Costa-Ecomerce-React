import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Components
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer';
import ItemDetailContainer from './views/ItemDetail/ItemDetailContainer';
import PurchaseForm from './Components/PurchaseForm/PurchaseForm';

//Views
import Home from './views/Home/Home'
import Contact from './views/Contact/Contact';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Login from './views/Login/Login';
import SignUp from './views/Login/SignUp';

//Context
import { ContextProvider } from './Context';

const App = () => {
  

  return(
    <>
      <ContextProvider>
        <Router>
          <Navbar />
          <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/contact' component={Contact} />
              <Route path='/purchaseform' component={PurchaseForm} />
              <Route path='/detail/:id' component={ItemDetailContainer} />
              <Route path='/category/:category' component={ItemListContainer} />
              <Route path='/login' component={Login} />
              <Route path='/signup' component={SignUp} />
          </Switch>
        </Router>
      </ContextProvider>
      <Footer />
    </>
  )
}

export default App;
