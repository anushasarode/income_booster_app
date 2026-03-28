import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Gigs = () => {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // BACKEND INTEGRATION:
    // This matches the fields in your job_model.dart: title, pay, location, isRemote
    const mockJobs = [
      {
        id: 'j1',
        title: 'Delivery Assistant',
        pay: 350.0,
        location: 'Koramangala, Bengaluru',
        isRemote: false,
        description: 'Assist in local grocery deliveries for 4 hours.'
      },
      {
        id: 'j2',
        title: 'Data Entry (Survey)',
        pay: 200.0,
        location: 'Remote',
        isRemote: true,
        description: 'Digitize local farm records.'
      },
      {
        id: 'j3',
        title: 'Event Helper',
        pay: 500.0,
        location: 'Whitefield',
        isRemote: false,
        description: 'Help setup a local community workshop.'
      }
    ];
    setJobs(mockJobs);
  }, []);

  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex items-center mb-6">
        <button onClick={() => navigate('/dashboard')} className="mr-4 text-xl">←</button>
        <h1 className="text-xl font-bold text-gray-800">Available Gigs</h1>
      </div>

      {/* Filter Chips (Matches your 'isRemote' logic) */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        <span className="bg-green-600 text-white px-4 py-1 rounded-full text-sm shadow-sm">All</span>
        <span className="bg-white border border-gray-200 px-4 py-1 rounded-full text-sm text-gray-600">Local</span>
        <span className="bg-white border border-gray-200 px-4 py-1 rounded-full text-sm text-gray-600">Remote</span>
      </div>

      {/* Job List */}
      <div className="space-y-4">
        {jobs.map((job) => (
          <div key={job.id} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-gray-900 text-lg">{job.title}</h3>
                <div className="flex items-center text-gray-500 text-sm mt-1">
                  <span>📍 {job.location}</span>
                  {job.isRemote && (
                    <span className="ml-2 bg-blue-50 text-blue-600 px-2 py-0.5 rounded text-[10px] font-bold uppercase">
                      Remote
                    </span>
                  )}
                </div>
              </div>
              <div className="text-right">
                <p className="text-green-600 font-bold text-xl">₹{job.pay}</p>
                <p className="text-gray-400 text-[10px] uppercase">Daily Pay</p>
              </div>
            </div>
            
            <p className="text-gray-600 text-sm mt-3 line-clamp-2">
              {job.description}
            </p>

            <button className="mt-4 w-full bg-gray-900 text-white py-2.5 rounded-xl font-semibold text-sm hover:bg-gray-800 transition">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gigs;