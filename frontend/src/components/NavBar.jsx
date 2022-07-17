import {Notification} from "./Notification";

function CustomNavBar() {
    return (
        <nav className="navbar navbar-dark bg-dark p-2 d-flex justify-content-between">
            <div>Bread & Breakfast</div>
            <Notification/>
        </nav>
    )
}

export {CustomNavBar}