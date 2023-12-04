import ManImg from "./images/man.png";

export const UserAvatar = () => (
    <div className="flex">
        <img src={ManImg} alt="Project Manager" className="w-[42px] h-[42px] mr-[12px]"/>
        <div>
            <h1 className="text-[14px]">Evano</h1>
            <p className="text-[12px] text-[#757575]">Project Manager</p>
        </div>
    </div>
);
