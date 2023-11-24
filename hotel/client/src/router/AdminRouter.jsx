import React from 'react'
import {Routes, Route} from "react-router-dom"
import { AdminLayout } from "../layouts"
import { Auth,  } from "../pages/admin"
import { useAuth } from "../hooks"


export function AdminRouter() {

  const { user } = useAuth()

  const loadLayout = (Layout, Page) => {
    return (
      <Layout>
        <Page />
      </Layout>
    );
  };

  return (
    <Routes>
      {!user ? (
        <Route path="/admin/*" element={<Auth />} />
      ) : (
        <>
        </>
      )}
    </Routes>
  );
}
