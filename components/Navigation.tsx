'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Home, Terminal, Package, BookOpen, Settings, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'ホーム', href: '/', icon: Home },
  { name: 'コマンド', href: '/commands', icon: Terminal },
  { name: 'アイテム', href: '/items', icon: Package },
  { name: 'レシピ', href: '/recipes', icon: BookOpen },
  { name: '国家システム', href: '/systems', icon: Settings },
  { name: 'リンク集', href: '/links', icon: ExternalLink },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Navigation */}
      <div className="lg:hidden">
        <div className="flex items-center justify-between p-4 bg-emerald-800 text-white">
          <Link href="/" className="font-bold text-lg">
            MakeCountry
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md hover:bg-emerald-700 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {isOpen && (
          <div className="bg-emerald-700 text-white border-t border-emerald-600">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'flex items-center px-4 py-3 text-sm hover:bg-emerald-600 transition-colors',
                    pathname === item.href && 'bg-emerald-600'
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  <Icon className="mr-3 h-5 w-5" />
                  {item.name}
                </Link>
              );
            })}
          </div>
        )}
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:block">
        <div className="bg-emerald-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="font-bold text-xl">
                MakeCountry
              </Link>
              <nav className="flex space-x-8">
                {navigation.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={cn(
                        'flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors',
                        'hover:bg-emerald-700',
                        pathname === item.href
                          ? 'bg-emerald-700 text-white'
                          : 'text-emerald-100 hover:text-white'
                      )}
                    >
                      <Icon className="mr-2 h-4 w-4" />
                      {item.name}
                    </Link>
                  );
                })}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}