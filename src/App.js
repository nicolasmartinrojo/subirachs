import React from 'react';
import {ThemeProvider} from 'styled-components';
import SubirachsPage from './Pages/SubirachsPage';
import THEME from './theme';

function App() {
  return (
    <ThemeProvider theme={THEME}>
      <div className="App">
        <SubirachsPage />
      </div>
    </ThemeProvider>
  );
}

export default App;
