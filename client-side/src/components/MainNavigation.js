
import { Button } from "@mui/material";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Breadcrumbs from '@mui/material/Breadcrumbs';

const MainNavigation = () => {
    return (
        <>
            <ul>
                <li>
                    <Link to='/'><Button variant="contained">Home</Button></Link>
                </li>
                <li>
                    <Link to='/create-post'><Button variant="contained">Create Post</Button></Link>
                </li>
            </ul>
        </>
    )
}
export default MainNavigation