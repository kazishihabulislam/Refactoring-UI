import { useEffect } from "react";
import { useState } from "react";
import MembershipCard from "../MembershipCard/MembershipCard";

const GymInfo = () => {
  const [infoCard, setInfoCard] = useState([]);
  useEffect(() => {
    fetch("gym_membership_pricing.json")
      .then((res) => res.json())
      .then((data) => setInfoCard(data));
  }, []);
  return (
    <div className="my-12 p-12 bg-[#1C1C1C] text-[#F5F5F5] rounded-lg flex flex-col space-y-10">
      {/* Fitness Plan Section Article! Welcome Message */}
      <div className="w-2/3 mx-auto space-y-4">
        <h3 className="text-5xl font-bold text-center">
          Welcome to Your Fitness Journey!
        </h3>
        <p className="text-xl text-gray-300 text-center">
          Congratulations on taking the first step towards a healthier,
          stronger, and more confident you! Whether you're just starting or
          striving to reach new fitness goals, we're here to support you every
          step of the way. With 24/7 access, expert guidance, and personalized
          tools, you're set up for success from day one. Let’s make your goals a
          reality—starting today!
        </p>
      </div>
      <div className="space-y-2 w-2/3 mx-auto text-center">
        <h3 className="text-3xl font-semibold">
          Select the Perfect Plan for Your Fitness Goals
        </h3>
        <p className="text-lg text-gray-400 font-medium">
          Congratulations on taking the first step towards a healthier you!
          Let's kickstart your journey.
        </p>
      </div>
      <div className="space-y-8">
        <h2 className="text-center text-6xl font-bold ">Our Memberships</h2>
        {/* MembershipCard Component */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 rounded-md p-4">
          {infoCard.map((cardInfo, idx) => (
            <MembershipCard key={idx} cardInfo={cardInfo}></MembershipCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GymInfo;
