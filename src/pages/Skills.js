import { useNavigate } from "react-router-dom";

function Skills() {
  const navigate = useNavigate();

  const courses = [
    { title: "Digital Payments", duration: "15 mins", emoji: "💳" },
    { title: "Customer Communication", duration: "10 mins", emoji: "🗣️" },
    { title: "Product Packaging", duration: "20 mins", emoji: "📦" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4">

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => navigate("/dashboard")}
          className="text-green-600 font-bold"
        >
          ← Back
        </button>
        <h1 className="text-xl font-bold text-gray-700">Learn Skills</h1>
      </div>

      {/* Courses */}
      <div className="space-y-4">
        {courses.map((course, index) => (
          <div key={index} className="bg-white rounded-2xl shadow p-4 flex justify-between items-center">
            <div>
              <p className="text-2xl">{course.emoji}</p>
              <h2 className="font-bold text-gray-700">{course.title}</h2>
              <p className="text-sm text-gray-500">{course.duration}</p>
            </div>

            <button className="bg-green-500 text-white px-4 py-2 rounded-xl text-sm">
              Start
            </button>
          </div>
        ))}
      </div>

      {/* AI Suggestion */}
      <div className="mt-6 bg-blue-600 rounded-2xl p-4 text-white">
        <p className="font-bold">🤖 AI Learning Tip</p>
        <p className="text-sm mt-2">
          Learning digital payments can increase customer trust and daily sales.
        </p>
      </div>

    </div>
  );
}

export default Skills;