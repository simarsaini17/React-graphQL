import BookList from './components/BookList';
import AddBook from './components/AddBook';
import ApolloClient from 'apollo-boost';
// import { ApolloClient,InMemoryCache } from '@apollo/client';
import { ApolloProvider } from 'react-apollo';
import './index.css';

const client=new ApolloClient({
  uri:'http://localhost:4000/graphql',
  onError: ({ networkError, graphQLErrors }) => {
    console.log('graphQLErrors', graphQLErrors)
    console.log('networkError', networkError)
  },
})

function App() {
  return (
    <ApolloProvider client={client}> 
       <h1>Reading Book</h1>
      <div className="App">         
      <BookList/> 
      <AddBook/>
      </div>
      </ApolloProvider>
  );
}

export default App;
