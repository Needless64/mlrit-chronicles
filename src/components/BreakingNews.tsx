import { breakingNews } from '@/data/content';

export default function BreakingNews() {
  const items = breakingNews.join('  ·  ');
  const doubled = items + '  ·  ' + items;

  return (
    <div className="border-b border-ink/20 bg-ink text-paper overflow-hidden">
      <div className="max-w-editorial mx-auto px-4 flex items-center">
        <span className="font-sans font-bold uppercase tracking-editorial-wide text-[0.65rem] py-2 pr-4 border-r border-paper/30 shrink-0">
          Latest
        </span>
        <div className="overflow-hidden flex-1 py-2">
          <div className="animate-ticker whitespace-nowrap font-sans text-[0.75rem] tracking-wide">
            {doubled}
          </div>
        </div>
      </div>
    </div>
  );
}
