import {QueryClient, QueryClientProvider, useQuery} from '@tanstack/react-query'
import './App.css'
import { Main } from './pages/Main'
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const queryClient = new QueryClient() 
const [modalIsOpen, setIsOpen] = React.useState(false);

function App() {

  return (
    <> 
     <QueryClientProvider client={queryClient}>
      <Main></Main>
     </QueryClientProvider>
    </>
  )
}

export default App
