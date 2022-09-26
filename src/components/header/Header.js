import logo from "../../assets/Vector.png"
import avatar from "../../assets/Profile.png"

const Header = () => {
    return (
        <header className="w-full flex justify-between font-lexend bg-[#1B1C1E] items-center py-2 h-[70px]">
            <div className="flex items-center">
                <div>
                    <img src={logo} />
                </div>
                <div>
                    <h3 className="text-white font-bold pl-5">Logoipsum</h3>
                </div>
            </div>
            <div className="flex items-center">
                <div className="pr-10">
                    <img src={avatar} />
                </div>
                <div>
                    <div className="bg-[#2B2B2B] flex flex-col justify-between px-2 py-3 rounded-full" style={{width: "45px", height : "45px"}}>
                        <span className="bg-white block" style={{height: "3px"}}></span>
                        <span className="bg-white block" style={{height: "3px"}}></span>
                        <span className="bg-white block" style={{height: "3px"}}></span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;