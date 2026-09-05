import type { Article } from '@/data/content';

type Props = {
  articles: Article[];
  onOpen: (id: string) => void;
};

export default function OpinionSection({ articles, onOpen }: Props) {
  return (
    <section className="border-b-2 border-ink">
      <div className="flex items-center gap-4 pt-8 pb-4">
        <h2 className="font-serif font-black text-3xl md:text-4xl tracking-tight uppercase">
          Opinion
        </h2>
        <div className="flex-1 border-t-2 border-ink" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 pb-8">
        {articles.map((article, i) => (
          <div
            key={article.id}
            className={`pb-6 md:pb-0 ${i < articles.length - 1 ? 'md:border-r md:border-ink/15' : ''} md:px-6 first:md:pl-0 last:md:pr-0`}
          >
            <article className="flex flex-col h-full">
              <span className="meta-label text-ink/50 mb-3">Editorial</span>
              <h3
                className="font-serif italic font-bold text-xl md:text-2xl leading-tight mb-3 cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => onOpen(article.id)}
              >
                {article.headline}
              </h3>
              <p className="font-body text-sm leading-relaxed text-ink/75 mb-3">
                {article.dek}
              </p>
              <div className="meta-label text-ink/60 mt-auto">
                BY {article.author} · {article.date}
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}
