import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import Listings from "./components/Listings";
import ProductPage from "./components/ProductPage";
import SingleReview from "./components/Reviews/SingleReview";
import ReviewForm from "./components/Reviews/ReviewForm";
import NavBar from "./components/Navigation/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import SearchResults from "./components/search/SearchResults";
import LandingPage from "./components/LandingPage/LandingPage"
import SearchResults from "./components/Search/SearchResults";
import ShoppingCart from "./components/ShoppingCart"
import { authenticate } from "./store/session";

function App() {
  // TODO: Login and Signup forms should be modals
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async() => {
      const user = await dispatch(authenticate());
      setLoaded(true);
    })();
  }, []);

  if (!loaded) {
    // TODO: Maybe add a loading animation in place of null?
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        {/* Removed protected route so it wouldn't redirect to login */}
        <Route exact path="/" exact={true} >
          <LandingPage />
        </Route>
        <Route path="/login" exact={true}>
          <LoginForm />
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignUpForm />
        </Route>
        <Route path="/category/:category" exact={true}>
          <Listings />
        </Route>
        <Route path="/products/:productId" exact={true}>
          <ProductPage />
        </Route>
        <Route path="/reviews" exact={true}>
          <SingleReview />
        </Route>
        <Route path="/reviews/review_form/:productId" exact={true}>
          <ReviewForm />
        </Route>
        <ProtectedRoute path="/users" exact={true}>
          <UsersList />
        </ProtectedRoute>
        <ProtectedRoute path="/users/:userId" exact={true}>
          <User />
        </ProtectedRoute>
        <ProtectedRoute path="/shopping-cart" exact={true}>
          <ShoppingCart />
        </ProtectedRoute>
        <Route path="/search/:searchTerm">
          <SearchResults />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
