import {QueryClient, QueryClientProvider, useQuery} from '@tanstack/react-query'
import './App.css'
import { Main } from './pages/Main'
import React from 'react';
import { Footer } from './footer/footer';
const queryClient = new QueryClient() 


function App() {

  return (
    <> 
     <QueryClientProvider client={queryClient}>
      <Main></Main>
     </QueryClientProvider>
     <Footer/>
    </>
  )
}

export default App
