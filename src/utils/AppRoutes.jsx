import React from 'react'
import Dashboard from '../components/Dashboard'
import AddBook from '../components/AddBook'
import EditBook from '../components/EditBook'
import { Navigate } from 'react-router-dom'

const AppRoutes = [
    {
        path : '/',
        element : <Dashboard/>,
        exact:true
    },
    {
        path : '/add-book',
        element : <AddBook/>,
        exact:true
    },
    {
        path : '/edit-book/:id',
        element : <EditBook/>,
        exact:true
    },
    {
        path : '*',
        element : <Navigate to='/' />,
        exact:false
    }
]

export default AppRoutes