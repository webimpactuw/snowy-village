import OrderOnline from "./OrderOnline";
import Promotions from "./Promotions";
import MenuBlock from "../../components/MenuBlock";
import MenuItem from "../../components/MenuItem";

export default function Menu() {
  return (
    <>
      <OrderOnline />
      <Promotions />
      <MenuBlock title="Bingsoo">
        <MenuItem
          imgFileName="test_mountains.jpg"
          name="Mountains"
          price={1.0}
          description={`This is a test item. Not for sale. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`}
        />
      </MenuBlock>
    </>
  );
}
