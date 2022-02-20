import {Redirect, Route, Switch} from "react-router-dom";
import {ItemDetailPage, privatPages, publicPage} from "./routes";
import NOT_FOUND from "./urls";

const Pages = () => {

return(
    <Switch>
        {
            publicPage.map(({id,name,path,Component})=>{
                return <Route key={id} path={path} component={Component} exact />;
            })
        }
        {
            ItemDetailPage.map(({id,name,path,Component})=>{
                return <Route key={id} path={path} component={Component} exact />;
            })
        }
        {
            privatPages.map(({id,name,path,Component})=>{
                return <Route key={id} path={path} component={Component} exact />;
            })
        }
        {/*<Redirect to={NOT_FOUND}/>*/}
    </Switch>
)
}

export default Pages;