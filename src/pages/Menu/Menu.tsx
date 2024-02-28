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
        <MenuItem />
      </MenuBlock>
    </>
  );
}
