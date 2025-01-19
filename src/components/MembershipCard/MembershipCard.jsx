import { FaCircleCheck } from "react-icons/fa6";
const MembershipCard = ({cardInfo}) => {
    const {id, name, price, features} = cardInfo;
    return (
        <div className="bg-gradient-to-tr from-[#FF6B35] to-[#27AE60] text-white rounded-[15px] p-5 text-center shadow-md flex flex-col">
            <div className="text-center">
            <h2>
                <span className="price text-[32px] font-bold text-white mt-4">{price} <i className="fa-solid fa-dollar-sign"></i></span>
                <span className="text-2xl font-semibold"> /mon</span>
            </h2>
            <h3 className="text-[30px] font-bold text-[#FFD700]">{name}</h3>
            </div>
            <div className="px-6 flex-grow">
                <ul className="text-left text-[18px] text-[#F5F5F5]">
                {
                    features.map((feature, index) =>  <li className="flex gap-2 justify-start items-center" key={index}><FaCircleCheck className="text-green-300"></FaCircleCheck>{feature}</li>)
                }
                </ul>
            </div>
            <div>
            <button className="mt-4 px-5 py-2 bg-black text-white rounded-md cursor-pointer transition ease-in-out duration-300 hover:bg-[#FF6B35]">
    Join Now
  </button>
            </div>
            
            
        </div>
    );
};

export default MembershipCard;