
import { Breadcrumbs, Link, Typography } from '@mui/material';

const MainNavigation = () => {
    return (
        <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
                Home
            </Link>
            <Link
                underline="hover"
                color="inherit"
                href="/create-post"
            >
                Create Post
            </Link>
            <Typography color="text.primary">Breadcrumbs</Typography>
        </Breadcrumbs>
    )
}
export default MainNavigation