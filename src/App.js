import React from 'react'
import { PageWrapper, Header, Main, Footer } from './components/layout'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme'
import { Fsm } from './components/fsm'

function App() {
  return (
    <ThemeProvider theme={ theme }>
      <PageWrapper>
        <Header>
          ...
        </Header>
        <Main>
          <Fsm />
        </Main>
        <Footer>
          ...
        </Footer>
      </PageWrapper>
    </ThemeProvider>
  )
}

export default App
