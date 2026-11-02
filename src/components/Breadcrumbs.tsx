import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { BreadcrumbEntry } from '../utils/seoSchemas';

interface BreadcrumbsProps {
  items: BreadcrumbEntry[];
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className = '' }) => {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`py-3 text-xs text-[#5C4863] ${className}`}
    >
      <ol className="flex flex-wrap items-center gap-1.5 sm:gap-2">
        <li className="inline-flex items-center">
          <Link
            to="/"
            className="inline-flex items-center gap-1 text-[#8C6830] hover:text-[#1F1424] transition-colors font-medium"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.item} className="inline-flex items-center gap-1.5 sm:gap-2">
              <ChevronRight className="w-3.5 h-3.5 text-[#C29B4F]/60 shrink-0" />
              {isLast ? (
                <span className="font-semibold text-[#1F1424] truncate max-w-[200px] sm:max-w-none" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link
                  to={item.item}
                  className="text-[#5C4863] hover:text-[#1F1424] transition-colors font-medium"
                >
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
