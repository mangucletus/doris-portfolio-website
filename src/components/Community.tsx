import React from 'react';
import { Heart, Users, Lightbulb } from 'lucide-react';

// Importing photos
import AZonePhoto from '../files/A-Zone-network-photo1.jpeg';
import BRMPPhoto from '../files/Basic-Resilience-Mentorship-Program-photo3.jpeg';
import EconomicPhoto from '../files/Economic-Empowerment-Project-photo.jpeg';
import MenstrualPhoto from '../files/World-Menstrual-Hygiene-Day-2024-photo.jpeg';

const Community: React.FC = () => {
  return (
    <section id="community" className="section bg-blue-50">
      <div className="container">
        <h2 className="section-title">Community Impact</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {/* Basic Resilience Mentorship Program */}
          <div className="card p-6 flex flex-col h-full animate-slideUp items-center text-center">
            <img src={BRMPPhoto} alt="Basic Resilience Mentorship" className="w-full h-64 object-cover rounded-lg mb-4 shadow-md" />
            <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Heart className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Basic Resilience Mentorship Program
            </h3>
            <p className="text-gray-700 mb-4 flex-grow">
              As co-founder, I provide mentorship to rural girls on hygiene, career development, and digital literacy. 
              In May 2023, I led an education and hygiene sensitization project in Jelinko, Savannah Region, 
              training 20 girls in basic IT skills such as typing and Microsoft Word.
            </p>
            <div className="mt-4">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                Mentorship
              </span>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 ml-2">
                Education
              </span>
            </div>
          </div>

          {/* World Menstrual Hygiene Day 2024 */}
          <div className="card p-6 flex flex-col h-full animate-slideUp animation-delay-100 items-center text-center">
            <img src={MenstrualPhoto} alt="Menstrual Hygiene Day" className="w-full h-64 object-cover rounded-lg mb-4 shadow-md" />
            <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              World Menstrual Hygiene Day, 2024
            </h3>
            <p className="text-gray-700 mb-4 flex-grow">
              Collaborated with Light for Children Foundation to provide sanitary pads to girls in Nyege, 
              Savannah Region, promoting menstrual health awareness and reducing stigma.
            </p>
            <div className="mt-4">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                Health Advocacy
              </span>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 ml-2">
                Women's Rights
              </span>
            </div>
          </div>

          {/* Economic Empowerment Project */}
          <div className="card p-6 flex flex-col h-full animate-slideUp animation-delay-200 items-center text-center">
            <img src={EconomicPhoto} alt="Economic Empowerment" className="w-full h-64 object-cover rounded-lg mb-4 shadow-md" />
            <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Lightbulb className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Economic Empowerment Project
            </h3>
            <p className="text-gray-700 mb-4 flex-grow">
              Trained over 20 single mothers in batik, tie, and dye making as part of an economic 
              empowerment initiative, providing skills for sustainable income generation.
            </p>
            <div className="mt-4">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                Skills Training
              </span>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 ml-2">
                Economic Empowerment
              </span>
            </div>
          </div>
        </div>

        {/* A-Zone Section with Image */}
        <div className="mt-16 bg-white rounded-lg shadow-md p-8 animate-slideUp">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-3/5 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Director of Special Programs, A-Zone</h3>
              <p className="text-gray-700 mb-4">
                As the Director of Special Programs at A-Zone (NGO), I spearhead mentorship initiatives and 
                moderate organizational events aimed at community development and youth empowerment.
              </p>
              <p className="text-gray-700">
                I'm regularly invited to moderate programs and discussions for other organizations, leveraging 
                my communication skills and media background to facilitate meaningful conversations on 
                important social issues.
              </p>
            </div>
            <div className="md:w-2/5 flex flex-col items-center">
              <img src={AZonePhoto} alt="A-Zone Event" className="w-full h-64 object-cover rounded-lg mb-6 shadow-md" />
              <div className="bg-blue-50 p-6 rounded-lg w-full">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Impact Highlights</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="inline-block bg-blue-200 rounded-full p-1 mr-2 mt-1">
                      <Heart className="h-3 w-3 text-blue-700" />
                    </span>
                    Mentored over 50 young women
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block bg-blue-200 rounded-full p-1 mr-2 mt-1">
                      <Heart className="h-3 w-3 text-blue-700" />
                    </span>
                    Facilitated 15+ community discussions
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block bg-blue-200 rounded-full p-1 mr-2 mt-1">
                      <Heart className="h-3 w-3 text-blue-700" />
                    </span>
                    Organized 5 skills training workshops
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
