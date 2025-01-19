import PropTypes from 'prop-types';
const Links = ({route}) => {
   const {id, name, path} = route;
    return (
        <div>
           <ul>
           <li><a href={route.path}>{route.name}</a></li>
           </ul>
        </div>
    );
};
Links.propTypes = {
    route: PropTypes.object.isRequired,
}
export default Links;