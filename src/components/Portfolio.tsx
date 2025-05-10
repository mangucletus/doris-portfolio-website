import React, { useState } from 'react';
import { ExternalLink, Play } from 'lucide-react';

interface Story {
  id: number;
  title: string;
  description: string;
  category: string;
  link: string;
  isVideo: boolean;
}

const Portfolio: React.FC = () => {
  const stories: Story[] = [
    {
      id: 1,
      title: "Hidden Tears Behind the Beautiful Faces",
      description: "Parents fight for help, demand the inclusion of cerebral palsy treatment in the health insurance scheme. This TV report highlights the plight of mothers caring for children with cerebral palsy—their struggles, trauma, and how a policy decision could offer significant support.",
      category: "Health",
      link: "https://youtu.be/cOe6wGn52xY?si=rTFLfkhG_XuZsFYY",
      isVideo: true
    },
    {
      id: 2,
      title: "Impact of Illegal Mining on Rural Communities",
      description: "This TV report highlights the devastating impact of illegal mining on the health and education of rural communities in the Ahafo Ano South West Municipality of the Ashanti Region, how the activity hampers the achievement of some SDGs, and the need for urgent action.",
      category: "Environment",
      link: "https://www.facebook.com/share/v/16N2uwxcu6/",
      isVideo: true
    },
    {
      id: 3,
      title: "Can the Mahama Government Deliver on Its Educational Promise?",
      description: "This publication delves into political promises and the impact they could have on Ghana's educational sector, analyzing the feasibility of the free first year tertiary education promise.",
      category: "Politics",
      link: "https://citinewsroom.com/2025/01/can-the-mahama-led-administration-deliver-on-its-free-first-year-tertiary-education-promise-doris-lonta-writes/",
      isVideo: false
    },
    {
      id: 4,
      title: "Family Appeals for Financial Support to Save Their Daughter",
      description: "This TV and online report highlights the plight of a young student and her family who needed urgent financial support for the 16-year-old's eye treatment after she was shot by a colleague at school.",
      category: "Human Interest",
      link: "https://citinewsroom.com/2025/04/help-me-save-my-daughters-sight-mother-of-16-year-old-girl-hit-by-bullet-cries-for-support/",
      isVideo: false
    }
  ];

  const [filter, setFilter] = useState('All');

  const categories = ['All', ...new Set(stories.map(story => story.category))];
  
  const filteredStories = filter === 'All' 
    ? stories 
    : stories.filter(story => story.category === filter);

  return (
    <section id="portfolio" className="section bg-white">
      <div className="container">
        <h2 className="section-title">Featured Stories</h2>
        
        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  filter === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {filteredStories.map((story, index) => (
            <div 
              key={story.id} 
              className="card overflow-hidden transition-all duration-300 hover:shadow-xl animate-slideUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {story.category}
                  </span>
                  {story.isVideo && (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      <Play className="h-3 w-3 mr-1" />
                      Video
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">{story.title}</h3>
                <p className="text-gray-700 mb-4">{story.description}</p>
                
                <a 
                  href={story.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 transition-colors duration-200"
                >
                  View Full Story
                  <ExternalLink className="h-4 w-4 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;