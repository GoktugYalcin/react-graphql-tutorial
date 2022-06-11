import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import SearchProvider from "./context/SearchContext";


const root = ReactDOM.createRoot(document.getElementById('root'));
const client = new ApolloClient({
    uri: "https://api.spacex.land/graphql/",
    cache: new InMemoryCache()
})
root.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
);
