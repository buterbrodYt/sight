import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import { Main, Sight, SightCard, Contact } from "./pages";
import { Header, Footer } from "./components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter basename="/sight/">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/sight" element={<Sight />} />
          <Route path="/sight/:id" element={<SightCard />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </QueryClientProvider>
  );
}
