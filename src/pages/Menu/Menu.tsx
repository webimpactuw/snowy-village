import OrderOnline from "./OrderOnline";
import MenuBlock from "./MenuBlock";
import MenuItem from "./MenuItem";
import OrderButton from "./OrderButton";
import menuData from "./menu-data.json";

export default function Menu() {
  // Replace OrderOnline link with Snowy Village's Doordash link
  return (
    <div className="grid grid-cols-1 bg-background-color gap-6">
      <OrderOnline>
        <OrderButton
          imgFileName="doordash_logo.jpg"
          companyName="Doordash"
          link="https://www.doordash.com"
        />
        <OrderButton
          imgFileName="doordash_logo.jpg"
          companyName="Doordash"
          link="https://www.doordash.com"
        />
        <OrderButton
          imgFileName="doordash_logo.jpg"
          companyName="Doordash"
          link="https://www.doordash.com"
        />
      </OrderOnline>
      {menuData.sections.map((section) => (
        <MenuBlock title={section.name}>
          {section.items.map((item) => (
            <MenuItem {...item} />
          ))}
        </MenuBlock>
      ))}
    </div>
  );
}
