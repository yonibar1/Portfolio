import './App.scss';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
// import { useEffect } from 'react'
import { HomePage } from './views/HomePage'
import { AppHeader } from './cmps/AppHeader'


export function App() {
  // useEffect(() => {
  //   function handleScroll(event) {
  //     var clientRect = event.srcElement.body.getBoundingClientRect();
  //     var clientY = clientRect.top;
  //     console.log(clientY, 'ITEM TS');
  //   }
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   }
  // }, [])

  return (
    <Router>
      <div className="App">
        <AppHeader />
        <Switch>
          <Route component={HomePage} path="/" />
        </ Switch>
      </div>
    </ Router>
  );
}


