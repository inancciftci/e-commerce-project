/* eslint-disable no-unused-vars */
import React from "react";
import Header from "./Header";
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "./Footer";
import Loader from "./Loader";

export default function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div className="layout">
      {isLoading && <Loader />}
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
