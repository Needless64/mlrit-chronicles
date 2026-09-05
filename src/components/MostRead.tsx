import { mostRead } from '@/data/content';

export default function MostRead() {
  return (
    <div className="border-2 border-ink p-6">
      <div className="flex items-center gap-3 mb-6">
        <h3 className="font-serif font-black text-xl uppercase tracking-tight">Most Read</h3>
        <div className="flex-1 border-t border-ink/30" />
      </div>
      <ol className="space-y-5">
        {mostRead.map((item) => (
          <li key={item.rank} className="flex items-start gap-4 group cursor-pointer">
            <span className="font-serif font-black text-3xl leading-none text-ink/80 group-hover:text-ink transition-colors shrink-0">
              {item.rank}
            </span>
            <div>
              <span className="meta-label text-ink/50 block mb-1">{item.category}</span>
              <p className="font-serif font-bold text-sm leading-snug group-hover:underline underline-offset-2 transition-all">
                {item.headline}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
