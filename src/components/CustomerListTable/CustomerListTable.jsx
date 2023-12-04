    import { rgba } from "polished";
    import { Pagination } from "./Pagination";
    import { useEffect, useMemo, useState } from "react";

    const NoActiveCellStyle = {
        background: '#FFC5C5',
        color: '#DF0404',
        borderRadius: '4px',
        border: '1px solid #DF0404',
        padding: '4px 4px',
        margin: '20px 0',
        display: 'block',
    };

    const ActiveCellStyle = {
        background: rgba(22, 192, 152, 0.38),
        color: '#008767',
        borderRadius: '4px',
        border: '1px solid #00B087',
        padding: '4px 4px',
        margin: '20px 0',
        display: 'block',
    };

    export const CustomerListTable = () => {
        const [customers, setCustomers] = useState([]);
        const [searchTerm, setSearchTerm] = useState('');
        const [currentPage, setCurrentPage] = useState(1);

        useEffect(() => {
            fetch(`https://656b1823dac3630cf727ac45.mockapi.io/Customers?page=${currentPage}&limit=8`)
                .then(response => response.json())
                .then(json => setCustomers(json))
        }, [currentPage]);

        // Filter customers based on the search term
        const filteredCustomers = useMemo(
            () => customers.filter(customer =>
                customer.name.toLowerCase().includes(searchTerm.toLowerCase())
            ),
            [customers, searchTerm]
        );

        return (
            <div className="w-[968px] md:w-auto rounded-3xl bg-white mt-[51px]">
                <div className="  pt-[30px] pb-[40px]">
                    <div className="flex justify-between px-[53px] md:mr-0 sm:flex-col">
                        <div>
                            <div className="text-[22px]">All Customers</div>
                            <div className="text-[#16C098] text-[14px]">Active Members</div>
                        </div>
                        <div className="relative sm:mt-4">
                            <input
                                type="text"
                                className="bg-gray-100 rounded-[10px] py-[10px] pl-[40px] text-[12px] w-[216px] sm:w-full"
                                placeholder="Search"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <svg className="absolute top-2 left-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#7E7E7E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M21 21L16.65 16.65" stroke="#7E7E7E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>

                    <div className="overflow-auto">
                        <div className="w-full border-collapse text-[14px] mt-[40px] min-w-[900px]">
                            <div className="text-[#B5B7C0] font-medium border-b-[1px] border-[#EEE] flex justify-between px-[53px]">
                                <div className="pb-[14px] sm:pr-[30px] whitespace-nowrap w-2/12">Company</div>
                                <div className="pb-[14px] sm:pr-[30px] whitespace-nowrap w-2/12">Customer Name</div>
                                <div className="pb-[14px] sm:pr-[30px] whitespace-nowrap w-2/12">Phone Number</div>
                                <div className="pb-[14px] sm:pr-[30px] whitespace-nowrap w-3/12">Email</div>
                                <div className="pb-[14px] sm:pr-[30px] whitespace-nowrap w-2/12">Country</div>
                                <div className="pb-[14px] sm:pr-[30px] whitespace-nowrap w-1/12">Status</div>
                            </div>
                            <div className="flex flex-col px-[53px]">
                                {filteredCustomers.map((customer) => (
                                    <div key={customer.id} className="flex justify-between text-[#292D32] text-[14px] font-medium border-b-[1px] border-[#EEE]">
                                        <div className="py-[24px] whitespace-nowrap w-2/12">{customer.name}</div>
                                        <div className="py-[24px] whitespace-nowrap w-2/12">{customer.company}</div>
                                        <div className="py-[24px] whitespace-nowrap w-2/12">{customer.phone}</div>
                                        <div className="py-[24px] whitespace-nowrap w-3/12">{customer.email}</div>
                                        <div className="py-[24px] whitespace-nowrap w-2/12">{customer.country}</div>
                                        <div className="text-[#008767] text-center w-1/12">
                                            <span style={customer.status ? NoActiveCellStyle : ActiveCellStyle}>Active</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between items-center px-[53px] sm:px-[30px] sm:flex-wrap sm:justify-center mt-[32px]">
                        <p className="text-[14px] text-[#B5B7C0] sm:mb-5">Showing data 1 to 8 of  256K entries</p>
                        <Pagination onChangePage={number => setCurrentPage(number)} />
                    </div>
                </div>
            </div>
        )
    }
