import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

function SidebarPro() {
  return <Sidebar>
    <Menu className="text-xl"
      menuItemStyles={{
        button: ({ level, active }) => {
          // only apply styles on first level elements of the tree
          if (level === 0)
            return {
              backgroundColor: active ? '#eecef9' : undefined,
            };
        },
      }}>
      <MenuItem component={<Link to="/home"/>}>Home</MenuItem>
      <MenuItem component={<Link to="/menu"/>}>Menu</MenuItem>
      <MenuItem component={<Link to="/gallery" />}>Gallery</MenuItem>
      <SubMenu label="Contact">
        <MenuItem component={<Link to="/contact/hiring" />}>Hiring</MenuItem>
        <MenuItem component={<Link to="/contact/collab" />}>Collab</MenuItem>
        <MenuItem component={<Link to="/contact/faq" />}>FAQ</MenuItem>
      </SubMenu>
      <SubMenu label="About Us">
        <MenuItem component={<Link to="/aboutus/team" />}>Team</MenuItem>
        <MenuItem component={<Link to="/aboutus/story" />}>Story</MenuItem>
        <MenuItem component={<Link to="/aboutus/locations" />}>Locations</MenuItem>
      </SubMenu>
    </Menu>
  </Sidebar>
}

export default SidebarPro;