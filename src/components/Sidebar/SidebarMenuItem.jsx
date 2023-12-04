
const styleItemActive = 'bg-[#5932EA] rounded-lg'
export const SidebarMenuItem = ( { item, isActive, onClick } ) => {
    return (
        <a href="#"
           onClick={onClick}
           className={`flex items-center py-[11px] pr-[11px] pl-[11px] ${isActive ? styleItemActive : ''} mb-[11px] last:mb-[0]`}
        >
            <img src={item.icon} alt={item.icon} className="mr-[14px]" />
            <span className={`text-[14px] ${isActive ? 'text-white' : 'text-[#9197B3]'}`}>{item.title}</span>
            { item.dropdownItems && (
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-auto" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 12L10 8L6 4" stroke={isActive ? '#fff' : '#9197B3'} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            ) }
        </a>
    )
}
