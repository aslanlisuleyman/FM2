import React from 'react'
import Wishlist from '../pages/Wishlist/Wishlist'
import SiteRoot from '../pages/SiteRoot'
import Home from '../pages/Home/Home'
import Detail from '../pages/Details/Detail'


const Routes = [{
    path:'/',
    element:<SiteRoot/>,
    children:[{
        path:'',
        element:<Home/>
    },{
        path:'Wishlist',
        element:<Wishlist/>
    },{
        path:'/:id',
        element:<Detail/>
    }]

}]

export default Routes