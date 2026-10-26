import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowLeft, Home } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-white py-20 px-4">
      <div className="max-w-md w-full bg-[#FAF7F2] border-2 border-[#E8DFD1] rounded-3xl p-8 sm:p-10 text-center shadow-xs space-y-6">
        <div className="inline-block mb-1">
          <img
            src="/assets/aistudio/image_7dcfa224.png"
            alt="Spa Soul"
            className="h-12 w-auto object-contain mx-auto"
          />
        </div>

        <div>
          <span className="text-xs uppercase tracking-widest text-[#8C6830] font-bold">
            Error 404
          </span>
          <h1 className="font-serif text-3xl font-bold text-[#1F1424] mt-1">
            Sanctuary Page Not Found
          </h1>
          <p className="text-xs text-[#3B2A40] mt-2 leading-relaxed font-normal">
            The page you are looking for may have been relocated or is currently in a state of quiet contemplation.
          </p>
        </div>

        <div className="pt-2 flex flex-col gap-3">
          <Link
            to="/"
            className="w-full py-3.5 rounded-lg bg-[#38162B] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#522144] transition-colors flex items-center justify-center gap-2 shadow-xs"
          >
            <Home className="w-4 h-4" /> Return to Home
          </Link>
          <Link
            to="/services"
            className="w-full py-3 rounded-lg border-2 border-[#1F1424] text-[#1F1424] text-xs font-bold uppercase tracking-wider hover:bg-white transition-colors"
          >
            Explore Spa Treatments
          </Link>
        </div>
      </div>
    </div>
  );
};
