import React from 'react';
import { User, Award, Briefcase, Sparkles } from 'lucide-react';
import profilePic from '../files/doris-profile-picture.jpeg'; // adjust if needed

const About: React.FC = () => {
  return (
    <section id="about" className="section bg-white">
      <div className="container">
        <h2 className="section-title text-center">About Me</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-10">
          {/* Centered image and text */}
          <div className="flex flex-col items-center text-center animate-slideUp">
            <img
              src={profilePic}
              alt="Doris Lonta Profile"
              className="w-64 h-64 object-cover rounded-full mb-6 border-4 border-blue-300 shadow-xl"
            />

            <p className="text-lg text-gray-700 leading-relaxed mb-6 max-w-2xl">
              I am Doris Lonta, a passionate journalist and advocate for human and community development. 
              Having benefited from the generosity and advocacy of selfless individuals, I have made it 
              my mission to use my platform to amplify the voices of the vulnerable and less privileged in society.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6 max-w-2xl">
              With two years of full-time experience in journalism, I have filed over 200 impactful news stories 
              that shed light on the plight of children, women, and underserved rural communities. My work continues 
              to generate results that drive positive change and improve lives.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
              My goal is to build a strong platform and network as a renowned journalist, dedicated to covering 
              issues that affect children, women, persons with special needs, and other societal concerns, 
              ultimately advocating for meaningful and lasting change.
            </p>
          </div>

          {/* Right column with cards (unchanged) */}
          <div className="space-y-8 animate-slideUp animation-delay-200">
            <div className="card p-6 border-l-4 border-blue-500">
              <div className="flex items-start mb-4">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <User className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Professional Summary</h3>
                  <p className="text-gray-700">
                    I am a committed journalist with a vision to establish a network of professionals 
                    passionate about championing the rights of the less privileged and underserved.
                  </p>
                </div>
              </div>
            </div>

            <div className="card p-6 border-l-4 border-blue-500">
              <div className="flex items-start mb-4">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <Briefcase className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Career Objective</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Expose corruption and promote transparency and development</li>
                    <li>Create a mentorship hub for rural girls, equipping them with emerging technologies and life skills</li>
                    <li>Foster a media platform focused on amplifying community issues and delivering actionable solutions</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card p-6 border-l-4 border-blue-500">
              <div className="flex items-start mb-4">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <Award className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Education</h3>
                  <p className="text-gray-700">BA in Media and Communication Studies</p>
                  <p className="text-gray-600">Kwame Nkrumah University of Science and Technology</p>
                  <p className="text-gray-600">MasterCard Foundation Alumna</p>
                </div>
              </div>
            </div>

            <div className="card p-6 border-l-4 border-blue-500">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <Sparkles className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Core Strengths</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-sm">Live Reporting</span>
                    <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-sm">Multimedia Storytelling</span>
                    <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-sm">Interviewing</span>
                    <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-sm">Script Writing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
