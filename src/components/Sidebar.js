import React from 'react';
import slug from 'slug';
import { Link, useRouteMatch, useLocation } from 'react-router-dom';

const CustomLink = ({ to, children }) => {
  const match = useRouteMatch(to.pathname);
  return (
    <li style={{ fontWeight: match ? 900 : 'normal' }}>
      <Link to={to}>{children}</Link>
    </li>
  );
};

const Sidebar = ({ title, list }) => {
  const { url } = useRouteMatch();
  const location = useLocation();
  return (
    <div>
      <h3 className='header'>{title}</h3>
      <ul className='sidebar-list'>
        {list.map((item, index) => (
          <CustomLink
            key={index}
            to={{
              pathname: `${url}/${slug(item)}`,
              search: location.search,
            }}
          >
            {item.toUpperCase()}
          </CustomLink>
        ))}
      </ul>
    </div>
  );
};
export default Sidebar;
