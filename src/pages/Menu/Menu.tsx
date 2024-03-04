import OrderOnline from "./OrderOnline";
import MenuBlock from "./MenuBlock";
import MenuItem from "./MenuItem";

export default function Menu() {
  return (
    <div className="grid grid-cols-1">
      <OrderOnline />
      <MenuBlock title="Bingsoo">
        <MenuItem
          imgFileName="test_lookout.jpg"
          name="Test Item"
          price="1.00"
          description={`This is a test item. Not for sale. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`}
        />
        <MenuItem
          imgFileName="test_lookout.jpg"
          name="Test Item"
          price="1.00"
          description={`This is a test item. Not for sale. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`}
        />
        <MenuItem
          imgFileName="test_lookout.jpg"
          name="Test Item"
          price="1.00"
          description={`This is a test item. Not for sale. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`}
        />
        <MenuItem
          imgFileName="test_lookout.jpg"
          name="Test Item"
          price="1.00"
          description={`This is a test item. Not for sale. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`}
        />
        <MenuItem
          imgFileName="test_lookout.jpg"
          name="Test Item"
          price="1.00"
          description={`This is a test item. Not for sale. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`}
        />
        <MenuItem
          imgFileName="test_lookout.jpg"
          name="Test Item"
          price="1.00"
          description={`This is a test item. Not for sale. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`}
        />
        <MenuItem
          imgFileName="test_lookout.jpg"
          name="Test Item"
          price="1.00"
          description={`This is a test item. Not for sale. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`}
        />
        <MenuItem
          imgFileName="test_lookout.jpg"
          name="Test Item"
          price="1.00"
          description={`This is a test item. Not for sale. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`}
        />
      </MenuBlock>
    </div>
  );
}
