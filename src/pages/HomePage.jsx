import { Sidebar } from "../components/Sidebar/Sidebar";
import { CustomerListTable } from "../components/CustomerListTable/CustomerListTable";
import { Burger } from "../components/Burger/Burger";

export const HomePage = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="w-full pt-[37px] bg-[#FAFBFF]">
                <div className="ml-[71px] lg:ml-[8px] sm:ml-3">
                    <div className="lg:flex lg:justify-between sm:ml-[20px]">
                        <h1 className="text-[24px]">Hello Evano 👋</h1>
                        <Burger />
                    </div>
                    <CustomerListTable />
                </div>
            </div>
        </div>
    );
}
