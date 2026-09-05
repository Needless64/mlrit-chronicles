import type { Article } from '@/data/content';

type Props = {
  article: Article;
  onOpen: (id: string) => void;
};

export default function LeadStory({ article, onOpen }: Props) {
  return (
    <article className="border-b-2 border-ink pb-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 pt-8">
        {/* Left: text */}
        <div className="flex flex-col justify-center order-2 lg:order-1">
          <span className="section-label text-ink mb-4">{article.category}</span>
          <h2
            className="headline-lead text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl mb-5 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => onOpen(article.id)}
            role="link"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && onOpen(article.id)}
          >
            {article.headline}
          </h2>
          <p className="font-body text-lg md:text-xl leading-relaxed text-ink/80 mb-5">
            {article.dek}
          </p>
          <div className="meta-label text-ink/60">
            BY {article.author} · {article.date} · {article.readTime}
          </div>
        </div>

        {/* Right: image */}
        <div className="order-1 lg:order-2">
          <div
            className="overflow-hidden cursor-pointer group"
            onClick={() => onOpen(article.id)}
          >
            <img
              src={article.image}
              alt={article.imageAlt || article.headline}
              className="w-full aspect-[4/3] object-cover grayscale contrast-125 group-hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
          {article.imageCaption && (
            <p className="font-sans text-[0.7rem] text-ink/60 mt-2 italic leading-relaxed">
              {article.imageCaption}
            </p>
          )}
        </div>
      </div>
    </article>
  );
}
