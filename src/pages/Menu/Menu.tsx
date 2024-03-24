import OrderOnline from "./OrderOnline";
import MenuBlock from "./MenuBlock";
import MenuItem from "./MenuItem";
import OrderButton from "./OrderButton";
import menuData from "./menu-data.json";

export default function Menu() {
  return (
    <div className="grid grid-cols-1 bg-background-color gap-6">
      <OrderOnline>
        {menuData.onlineOrderButtons.map((button) => (
          <OrderButton {...button} />
        ))}
      </OrderOnline>
      {menuData.menuSections.map((section) => (
        <MenuBlock title={section.name}>
          {section.items.map((item) => (
            <MenuItem {...item} />
          ))}
        </MenuBlock>
      ))}
    </div>
  );
}
