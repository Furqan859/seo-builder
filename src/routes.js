import React from 'react';
import { useRoutes } from 'react-router-dom';
import HandleData from './pages/HandleData';


export const paths = {
    handledata: '/handledata' ,
   
}
export default function Router() {
   return useRoutes([
       {path:paths.handledata, element:<HandleData/>},
      
   ])
}
