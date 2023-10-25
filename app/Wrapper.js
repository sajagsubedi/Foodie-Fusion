"use client";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/Theme";
import GlobalStyle from "@/styles/GlobalStyles";
import { Navbar, Footer } from "@/components/index";
import { Provider } from "react-redux";
import { store } from "@/state/store";
export default function Wrapper({ children }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Navbar />
        {children}
        <Footer />
      </ThemeProvider>
    </Provider>
  );
}
