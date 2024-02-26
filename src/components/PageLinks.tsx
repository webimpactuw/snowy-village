import { Link } from "react-router-dom";

// Not all of these links need to be used on the same page or in the sidebar,
// But they're useful to have as a component.
// These link components don't come with formatting. Put in a list or something.
function PageLinks() {
    return(
        <>
        <Link to="/">Home</Link>
        <Link to="/history">History</Link>
        <Link to="/locations">Locations</Link>
        <Link to="/collab">Collaborate</Link>
        <Link to="/faq">FAQs</Link>
        <Link to="/hiring">Hiring</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/menu">Menu</Link>
        </>
    );
}

export default PageLinks;