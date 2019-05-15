import 'babel-polyfill';
import React from "react";
import {Provider} from "react-redux";
import App, { Container } from "next/app";
import withRedux from "next-redux-wrapper";

import createComposedStore from "../store";
import "../components/bundle.scss"

const makeStore = () => createComposedStore(...arguments)

class MyApp extends App {

  state = { isMobile: false }

  componentDidMount(){
    window.screen.width < 1024 && this.setState({ isMobile: true });
  }

  render() {
    const { Component, pageProps, store } = this.props;

    if (this.state.isMobile){
      return (
        <div className="mobile-wrapper">
          Sorry, this game is not available for mobile devices
        </div>
      )
    } else {
      return (
        <Container>
          <Provider store={store}>
            <div className="wrapper">
              <Component {...pageProps} />
            </div>
          </Provider>
        </Container>
      );
    }
  }
}

export default withRedux(makeStore)(MyApp);