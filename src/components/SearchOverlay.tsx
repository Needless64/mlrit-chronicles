import { useState, useMemo } from 'react';
import { Search, X } from 'lucide-react';
import { allArticles } from '@/data/content';

type Props = {
  onClose: () => void;
  onOpen: (id: string) => void;
};

export default function SearchOverlay({ onClose, onOpen }: Props) {
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return allArticles.filter(
      (a) =>
        a.headline.toLowerCase().includes(q) ||
        a.dek.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div className="fixed inset-0 z-50 bg-paper overflow-y-auto">
      {/* Header */}
      <div className="border-b-2 border-ink sticky top-0 bg-paper z-10">
        <div className="max-w-editorial mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 flex-1">
            <Search size={20} strokeWidth={2.5} />
            <input
              autoFocus
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search stories, people, topics..."
              className="flex-1 font-serif text-xl md:text-2xl bg-transparent outline-none placeholder:text-ink/30"
            />
          </div>
          <button onClick={onClose} aria-label="Close search" className="ml-4 hover:opacity-60 transition-opacity">
            <X size={24} />
          </button>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-editorial mx-auto px-4 py-8">
        {query.trim() === '' ? (
          <p className="meta-label text-ink/40">Search MLRIT Chronicles</p>
        ) : results.length === 0 ? (
          <p className="meta-label text-ink/40">No results found for "{query}"</p>
        ) : (
          <div className="space-y-6">
            <p className="meta-label text-ink/50">
              {results.length} {results.length === 1 ? 'result' : 'results'} for "{query}"
            </p>
            {results.map((article) => (
              <article
                key={article.id}
                onClick={() => {
                  onOpen(article.id);
                  onClose();
                }}
                className="border-b border-ink/15 pb-6 cursor-pointer group"
              >
                <span className="section-label text-ink mb-2 block">{article.category}</span>
                <h3 className="headline-major text-2xl mb-2 group-hover:underline underline-offset-2 transition-all">
                  {article.headline}
                </h3>
                <p className="font-body text-sm text-ink/70 mb-2">{article.dek}</p>
                <p className="meta-label text-ink/50">{article.date} · {article.readTime}</p>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
