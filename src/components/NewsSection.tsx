import type { Article } from '@/data/content';

type Props = {
  title: string;
  articles: Article[];
  onOpen: (id: string) => void;
  columns?: number;
};

export default function NewsSection({ title, articles, onOpen, columns = 3 }: Props) {
  const colClass =
    columns === 2 ? 'md:grid-cols-2' : columns === 4 ? 'md:grid-cols-4' : 'md:grid-cols-3';

  return (
    <section className="border-b-2 border-ink">
      {/* Section header */}
      <div className="flex items-center gap-4 pt-8 pb-4">
        <h2 className="font-serif font-black text-3xl md:text-4xl tracking-tight uppercase">
          {title}
        </h2>
        <div className="flex-1 border-t-2 border-ink" />
      </div>

      {/* Stories */}
      <div className={`grid grid-cols-1 ${colClass} gap-8 md:gap-0 pb-8`}>
        {articles.map((article, i) => (
          <div
            key={article.id}
            className={`pb-6 md:pb-0 ${
              i < articles.length - 1 ? 'md:border-r md:border-ink/15' : ''
            } ${columns === 3 ? 'md:px-4 first:md:pl-0 last:md:pr-0' : 'md:px-4 first:md:pl-0 last:md:pr-0'}`}
          >
            <StoryBrief article={article} onOpen={onOpen} />
          </div>
        ))}
      </div>
    </section>
  );
}

function StoryBrief({ article, onOpen }: { article: Article; onOpen: (id: string) => void }) {
  return (
    <article className="flex flex-col h-full">
      {article.image && (
        <div
          className="overflow-hidden cursor-pointer group mb-3"
          onClick={() => onOpen(article.id)}
        >
          <img
            src={article.image}
            alt={article.imageAlt || article.headline}
            className="w-full aspect-[16/10] object-cover grayscale contrast-125 group-hover:scale-[1.02] transition-transform duration-500"
          />
        </div>
      )}
      <span className="section-label text-ink mb-2">{article.category}</span>
      <h3
        className="headline-brief text-xl md:text-xl mb-2 cursor-pointer hover:opacity-80 transition-opacity"
        onClick={() => onOpen(article.id)}
      >
        {article.headline}
      </h3>
      <p className="font-body text-sm leading-relaxed text-ink/75 mb-3">
        {article.dek}
      </p>
      <div className="meta-label text-ink/60 mt-auto">
        {article.date} · {article.readTime}
      </div>
    </article>
  );
}
