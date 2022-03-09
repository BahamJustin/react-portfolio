import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import NoMatch from "./pages/NoMatch";

const httpLink = createHttpLink({
  uri: "/react-portfolio",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Header />
          <main>
            <Routes>
              <Route path="/react-portfolio" element={<Home />} />
              <Route path="/Portfolio" element={<Portfolio />} />
              <Route path="/Contact" element={<Contact />} />
              <Route element={<NoMatch />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
