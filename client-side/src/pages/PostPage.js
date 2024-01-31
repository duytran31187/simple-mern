import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const PostPage = (props) => {
    return (
        <section>
            Post page
            <section>
                <Link to='/'><Button variant="contained">Home</Button></Link>
            </section>
        </section>
    );
}

export default PostPage;