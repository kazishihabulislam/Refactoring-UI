import { useEffect, useState } from "react";
import PhonesCard from "../PhonesCard/PhonesCard";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const Phones = () => {
  const [phones, setPhones] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((res) => res.json())
      .then((data) => setPhones(data.data));
  }, []);
  return (
    <div className="container mx-auto bg-zinc-800 rounded-md p-6 text-gray-100">
      <h2 className="text-2xl">Phones: {phones.length}</h2>
     <LineChart width={800} height={400} data={phones.length} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    <Line type="monotone" dataKey={'phones.length'} stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey={'phones.phone_name'} />
    <YAxis />
    <Tooltip />
  </LineChart>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {phones.map((phone) => (
          <PhonesCard key={phone.slug} phone={phone}></PhonesCard>
        ))}
      </div>
    </div>
  );
};

export default Phones;
