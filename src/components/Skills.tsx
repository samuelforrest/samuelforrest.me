"use client";

import { 
    FolderClock,
    Grid2X2Check,
    Lightbulb,
    Speech,
    UsersRound, 
} from "lucide-react";

export default function Skills() {
  return (
    <div className="w-full space-y-6">
      <h1 className="text-2xl font-bold pt-10 pb-6">Interpersonal Skills</h1>
      
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="p-3 rounded-full outline group-hover:bg-primary/20 transition-colors">
                <Speech className="w-7 h-7 text-orange-600" />
              </div>
              
              <h3 className="font-semibold text-gray-900 dark:text-white">
                Communication
              </h3>
              
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="p-3 rounded-full outline group-hover:bg-primary/20 transition-colors">
                <Lightbulb className="w-7 h-7 text-blue-600" />
              </div>
              
              <h3 className="font-semibold text-gray-900 dark:text-white">
                Innovative & Driven
              </h3>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="p-3 rounded-full outline group-hover:bg-primary/20 transition-colors">
                <UsersRound className="w-7 h-7 text-yellow-600" />
              </div>
              
              <h3 className="font-semibold text-gray-900 dark:text-white">
                Collaboration
              </h3>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="p-3 rounded-full outline group-hover:bg-primary/20 transition-colors">
                <Grid2X2Check className="w-7 h-7 text-green-600" />
              </div>
              
              <h3 className="font-semibold text-gray-900 dark:text-white">
                Problem Solver
              </h3>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="p-3 rounded-full outline group-hover:bg-primary/20 transition-colors">
                <FolderClock className="w-7 h-7 text-purple-600" />
              </div>
              
              <h3 className="font-semibold text-gray-900 dark:text-white">
                Organised & Punctual
              </h3>
            </div>
      </div>
    
    </div>
  );
}