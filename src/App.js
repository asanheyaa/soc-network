// import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer/Footer';
import { HashRouter, Route, Routes } from 'react-router-dom';
import News from './components/content/News/News';
import Music from './components/content/Music/Music';
import Settings from './components/content/Settings/Settings';
import DialogsContainer from './components/content/Dialogs/DialogsContainer';
import AsideContainer from './components/Aside/AsideContainer';
import UsersContainer from './components/content/users/Users-container';
import ProfileContainer from './components/content/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/loginPage/LoginPage';
import { compose } from 'redux';
import { Provider, connect } from 'react-redux';
import React from 'react';
import { initializedApp } from "./redux/app-reducer"
import Prealoder from './components/commons/prealoder';
import store from './redux/redux-store';
import WithRouter from './hocs/withRouter';

// setInterval(() => {
//   store.dispatch({type:"FAKE"})
// }, 1000);

class App extends React.Component {
  componentDidMount = () => {
  	if (!this.props.isLogined) {
      this.props.initializedApp()
  	}
  }
  render() {
    if (!this.props.initialized) {
      return <Prealoder />
    }
    return <div className="wrapper">
      <HeaderContainer />
      <AsideContainer />
      <main className='main-content'>
        <Routes>
          <Route path='/dialogs/*' element={<DialogsContainer />} />
          <Route path='/profile/:userId?' element={<ProfileContainer />} />
          <Route path='/news' element={<News />} />
          <Route path='/music' element={<Music />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/users' element={<UsersContainer />} />
        </Routes >
      </main>
      <Footer />
      </div>
      
     
  }
}


const mapStateToProps = (state) => ({
  initialized: state.app.initialized

})

const AppContainer =  compose(
  WithRouter,
  connect(mapStateToProps, { initializedApp })
)(App)


const MainApp = () => {
  return (
    // basename = { process.env.PUBLIC_URL }
    <HashRouter  >
        <Provider store={store}>
          <AppContainer />
        </Provider>
    </HashRouter>
  )
}

export default MainApp;
