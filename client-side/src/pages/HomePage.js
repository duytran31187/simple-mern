import { Button } from "@mui/material";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const HomePage = (props) => {
    return (
        <section>
            Home page
            <section>
                <Link to='/create-post'><Button variant="contained">Create Post</Button></Link>
            </section>
        </section>
    );
}

export default HomePage;