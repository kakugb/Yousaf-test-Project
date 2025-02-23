   // src/pages/PersonalityType.js
   import React from 'react';
   import { useTranslation } from 'react-i18next';

   const PersonalityType = () => {
       const { t } = useTranslation();
       const sections = [
           { id: 'introduction', title: t('personalityType.introduction'), content: '...' },
           { id: 'relationships', title: t('personalityType.romanticRelationships'), content: '...' },
           { id: 'friendships', title: t('personalityType.friendships'), content: '...' },
           { id: 'parenthood', title: t('personalityType.parenthood'), content: '...' },
           { id: 'career-paths', title: t('personalityType.careerPaths'), content: '...' },
           { id: 'workplace-habits', title: t('personalityType.workplaceHabits'), content: '...' },
           { id: 'conclusion', title: t('personalityType.conclusion'), content: '...' },
       ];

       return (
           <div className="flex flex-col md:flex-row bg-gray-50 min-h-screen">
               <div className="w-full md:w-1/4 p-6 bg-white shadow-lg rounded-lg border border-gray-200">
                   <h2 className="text-2xl font-semibold mb-4 text-gray-800">Table of Contents</h2>
                   <ul className="space-y-3">
                       {sections.map(section => (
                           <li key={section.id}>
                               <a href={`#${section.id}`} className="text-blue-600 hover:underline transition duration-300 ease-in-out transform hover:scale-105">
                                   {section.title}
                               </a>
                           </li>
                       ))}
                   </ul>
               </div>
               <div className="w-full md:w-3/4 p-6">
                   <h1 className="text-5xl font-bold text-gray-900">Architect</h1>
                   <h2 className="text-2xl font-semibold mt-2 text-gray-700">INTJ Personality</h2>
                   <p className="mt-4 text-gray-600">Architects are imaginative and strategic thinkers, with a plan for everything.</p>

                   {sections.map(section => (
                       <div key={section.id} id={section.id} className="mt-10">
                           <h3 className="text-3xl font-bold text-gray-800">{section.title}</h3>
                           <p className="mt-3 text-gray-600">{section.content}</p>
                       </div>
                   ))}
               </div>
           </div>
       );
   };

   export default PersonalityType;