import Home from "../Components/home/Home";
import Order from "../Components/orderCall/Order";
import Interstes from "../Components/Interstes/Interstes";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import ItemDetail from "../Components/ItemDetail/ItemDetail";
import Dashbord from "../Components/Dashbord/Dashbord";

export const HOME_PAGE = '/'
export const ITEM_DETAIL =  '/item/:id'
export const LOGIN_PAGE = '/login'
export const REGISTER_PAGE = '/register'
export const INTERESTEDS_PAGE = '/likes'
export const CALL_ORDERING = '/callOrdering'
export const MY_INTERESTEDS = '/userLikes'
export const NOT_FOUND = '/404'

export const publicPage = [
    {id:1,name:'Գլխավոր',path:HOME_PAGE,Component:Home},
    {id:2,name:'Պատվիրել Զանգ',path:CALL_ORDERING,Component:Order},
    {id:3,name:'Լայքեր',path:INTERESTEDS_PAGE,Component:Interstes},
    // {id:4,name:'Մուտք',path:LOGIN_PAGE,Component:Login},
    // {id:5,name:'Գրանցվել',path:REGISTER_PAGE,Component:Register},
]

export const ItemDetailPage = [
    {id:1,name:"Ապրանք",path:ITEM_DETAIL,Component:ItemDetail}
]


export const privatPages = [
    {id:1,name:"Իմ Էջը",path:MY_INTERESTEDS,Component:Dashbord}
]





