import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm } from '@fortawesome/free-solid-svg-icons'


function Header() {
    return (
        <div className="row align-items-center" id="header-row">
            <div className="col" id="header-col"><FontAwesomeIcon icon={faFilm} id="header-icon"/>Movie Finder</div>
        </div>
    )
}
export default Header;