import React from 'react';
import { motion } from 'framer-motion';
import { LogOut, User } from 'lucide-react';
import { GoogleAuthService } from '../services/auth/googleAuth';

export const UserProfile = () => {
  const user = GoogleAuthService.getCurrentUser();

  if (!user) return null;

  return (
    <div className="relative group">
      <button className="flex items-center space-x-2">
        {user.picture ? (
          <img 
            src={user.picture} 
            alt={user.name} 
            className="w-8 h-8 rounded-full"
          />
        ) : (
          <User className="w-8 h-8 p-1 rounded-full bg-orange-100 dark:bg-orange-900 text-orange-500" />
        )}
        <span className="hidden md:block text-gray-700 dark:text-gray-300">
          {user.name}
        </span>
      </button>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute right-0 mt-2 w-48 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-xl invisible group-hover:visible"
      >
        <button
          onClick={() => GoogleAuthService.logout()}
          className="w-full px-4 py-2 text-left text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center space-x-2"
        >
          <LogOut className="w-4 h-4" />
          <span>Sign Out</span>
        </button>
      </motion.div>
    </div>
  );
};