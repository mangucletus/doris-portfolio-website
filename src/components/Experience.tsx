import React from 'react';
import { Radio, Languages, Edit, Video, Tv } from 'lucide-react';

const Experience: React.FC = () => {
  const skills = [
    { name: 'Effective Communication', icon: <Languages className="h-5 w-5 text-blue-600" /> },
    { name: 'Writing & Editing', icon: <Edit className="h-5 w-5 text-blue-600" /> },
    { name: 'Public Speaking', icon: <Radio className="h-5 w-5 text-blue-600" /> },
    { name: 'Video Editing', icon: <Video className="h-5 w-5 text-blue-600" /> },
    { name: 'Event Moderation', icon: <Tv className="h-5 w-5 text-blue-600" /> },
    { name: 'Project Coordination', icon: <Radio className="h-5 w-5 text-blue-600" /> },
  ];

  return (
    <section id="experience" className="section bg-gray-50">
      <div className="container">
        <h2 className="section-title">Experience & Skills</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
          <div className="lg:col-span-2 order-2 lg:order-1">
            <div className="card p-8 animate-slideUp">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Experience</h3>
              
              <div className="mb-8">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-semibold text-blue-800">Reporter | Regional Correspondent</h4>
                  <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">Current</span>
                </div>
                <p className="text-lg text-gray-600 mb-4">ChannelOne TV and Citi FM, Kumasi, Ghana</p>
                
                <h5 className="text-lg font-medium text-gray-800 mb-2">Key Responsibilities:</h5>
                <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
                  <li>Gathering stories from across different sectors</li>
                  <li>Writing compelling and factual news stories</li>
                  <li>Reporting stories across multiple platforms</li>
                  <li>Conducting interviews with diverse sources</li>
                  <li>Coverage of politics, social issues, investigative topics, business, and human interest stories</li>
                </ul>
                
                <h5 className="text-lg font-medium text-gray-800 mb-2">Achievements:</h5>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Filed over 200 impactful news stories across multiple sectors</li>
                  <li>Specialized in stories that drive social change</li>
                  <li>Published across radio, television, and online platforms</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-blue-800 mb-2">Additional Roles</h4>
                
                <div className="space-y-4">
                  <div>
                    <h5 className="text-lg font-medium text-gray-800">Co-founder</h5>
                    <p className="text-gray-600">Basic Resilience Mentorship Program</p>
                  </div>
                  
                  <div>
                    <h5 className="text-lg font-medium text-gray-800">Director of Special Programs</h5>
                    <p className="text-gray-600">A-Zone (NGO)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="card p-8 h-full animate-slideUp animation-delay-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Skills & Tools</h3>
              
              <div className="space-y-4 mb-8">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center p-3 bg-blue-50 rounded-lg transition-all duration-200 hover:bg-blue-100">
                    <div className="mr-3">
                      {skill.icon}
                    </div>
                    <span className="font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
              
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Tools</h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">Adobe Premiere Pro</span>
                <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">Photoshop</span>
              </div>
              
              <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-4">Languages</h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">English</span>
                <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">Twi</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;