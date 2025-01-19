import GymInfo from "../GymInfo/GymInfo";

const Hero = () => {
  return (
    <div className="container mx-auto">
      {/* Hero Banner  */}
      <div className="bg-black rounded-lg flex justify-between items-center px-10">
        <div className="w-2/5">
          <h2 className="text-7xl font-bold text-white">Get body in shape & stay healthy</h2>
        </div>
        <div className="w-3/5 flex justify-center items-center">
          <img
            className="object-cover"
            src="https://i.ibb.co.com/0h7D4ZM/Images-2.png"
            alt=""
          />
        </div>
      </div>
      {/* GymInfo Component */}
      <GymInfo></GymInfo>
    </div>
  );
};

export default Hero;
