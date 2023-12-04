import { useState } from "react";
import { SidebarMenuItem } from "./SidebarMenuItem";
import DashboardIcon from "./images/dashboard.svg";
import ProductIcon from "./images/product.svg";
import CustomerIcon from "./images/customer.svg";
import IncomeIcon from "./images/income.svg";
import PromoteIcon from "./images/promote.svg";
import HelpIcon from "./images/help.svg";

const items = [
    { id: 1, title: "Dashboard", icon: DashboardIcon },
    { id: 2, title: "Product", icon: ProductIcon, dropdownItems: [] },
    { id: 3, title: "Customers", icon: CustomerIcon, dropdownItems: [] },
    { id: 4, title: "Income", icon: IncomeIcon, dropdownItems: [] },
    { id: 5, title: "Promote", icon: PromoteIcon, dropdownItems: [] },
    { id: 6, title: "Help", icon: HelpIcon, dropdownItems: [] },
];

export const SidebarMenu = () => {
    const [ active, setActive ] = useState(3);
    return (
        <div>
            {items.map((item) => (
                <SidebarMenuItem
                    key={item.id}
                    item={item}
                    isActive={active === item.id}
                    onClick={() => setActive(item.id)}
                />
            ))}
        </div>
    )
};
