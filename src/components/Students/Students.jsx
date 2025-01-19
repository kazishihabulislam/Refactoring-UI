import axios from "axios";
import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { Rings } from "react-loader-spinner";

const Students = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("student_marks.json")
      .then((data) => {
        setStudents(data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mx-auto p-6 bg-zinc-900 text-white py-12 my-10 rounded-md">
      <div className="flex justify-center">
        {loading && (
          <Rings
            visible={true}
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="rings-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        )}
      </div>
      {!loading && (
        <>
          <h2 className="text-5xl font-semibold py-6">
            Students: {students.length}
          </h2>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={students}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="Physics" fill="#8884d8" />
              <Bar dataKey="Chemistry" fill="red" />
              <Bar dataKey="Biology" fill="green" />
            </BarChart>
          </ResponsiveContainer>
        </>
      )}
    </div>
  );
};

export default Students;
