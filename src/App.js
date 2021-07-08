import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Components/Header/Header';
import Body from './Components/Body/Body';
import ThemeContext from './Components/context/ThemeContext';
import './App.css';


class App extends React.Component {
 

  state = {
    theme: 'light',
    userProfile:[]
  }


  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(resData => this.setState({userProfile:resData}))
  }



  SwithTheme = () => {
    this.setState(({theme}) => {
       
      if (theme==='dark') {
          
        return {
          theme:'light'
        }
      } else {
        return {
           theme:'dark'
         }
      }

    })
  }


  render() {
    const { theme,userProfile } = this.state;
      return (
        <div className="App">
          <BrowserRouter>
            <ThemeContext.Provider
              value={{ theme: theme, SwithTheme: this.SwithTheme, userProfile:userProfile }}>
              <Header />
              <Body/>
           </ThemeContext.Provider>
          </BrowserRouter>
        </div>
      );
  }


}

export default App;
