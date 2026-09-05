import { useState, useEffect } from 'react';
import { Search, Menu, X } from 'lucide-react';

type Props = {
  onNavigate: (page: string) => void;
  onSearch: () => void;
};

const navItems = [
  'HOME',
  'CAMPUS',
  'NEWS',
  'TECHNOLOGY',
  'STUDENT LIFE',
  'CULTURE',
  'SPORTS',
  'OPINION',
  'EVENTS',
];

export default function Header({ onNavigate, onSearch }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [today, setToday] = useState('');

  useEffect(() => {
    const days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
    const months = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];
    const d = new Date();
    setToday(`${days[d.getDay()]}, ${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`);
  }, []);

  const handleNav = (item: string) => {
    setMobileOpen(false);
    onNavigate(item === 'HOME' ? 'home' : item);
  };

  return (
    <header className="border-b-2 border-ink">
      {/* Utility bar */}
      <div className="border-b border-ink/20">
        <div className="max-w-editorial mx-auto px-4 flex items-center justify-between py-2 text-[0.65rem] font-sans uppercase tracking-editorial-wide text-ink/70">
          <span className="hidden sm:block">{today || 'Loading...'}</span>
          <span className="sm:hidden">{today.split(',')[0] || ''}</span>
          <div className="flex items-center gap-4">
            <span>MLRIT · HYDERABAD</span>
            <span className="hidden md:inline">·</span>
            <span className="hidden md:inline">VOL. XII · NO. 1</span>
            <span className="hidden md:inline">·</span>
            <span className="hidden md:inline">AUTUMN EDITION</span>
          </div>
        </div>
      </div>

      {/* Masthead */}
      <div className="text-center py-6 md:py-10 px-4 border-b-2 border-ink">
        <p className="meta-label text-ink/60 mb-3">The Student Newspaper of MLRIT</p>
        <h1
          className="masthead-title text-5xl sm:text-6xl md:text-7xl lg:text-8xl cursor-pointer"
          onClick={() => onNavigate('home')}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && onNavigate('home')}
        >
          MLRIT CHRONICLES
        </h1>
        <p className="meta-label text-ink/60 mt-3">CAMPUS · CULTURE · TECHNOLOGY · PEOPLE</p>
      </div>

      {/* Navigation */}
      <nav className="border-b border-ink/20">
        <div className="max-w-editorial mx-auto px-4 flex items-center justify-between">
          <nav className="hidden md:flex items-center divide-x divide-ink/15">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNav(item)}
                className="px-4 py-3 text-[0.7rem] font-sans font-bold uppercase tracking-editorial-wide hover:bg-ink hover:text-paper transition-colors duration-200"
              >
                {item}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3 ml-auto md:ml-0 py-3">
            <button
              onClick={onSearch}
              className="flex items-center gap-2 text-[0.7rem] font-sans font-bold uppercase tracking-editorial-wide hover:opacity-60 transition-opacity"
              aria-label="Search"
            >
              <Search size={16} strokeWidth={2.5} />
              <span className="hidden sm:inline">Search</span>
            </button>
            <button
              className="md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="md:hidden border-t border-ink/20">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNav(item)}
                className="block w-full text-left px-4 py-3 text-[0.75rem] font-sans font-bold uppercase tracking-editorial-wide border-b border-ink/10 hover:bg-ink hover:text-paper transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
