import type { Article } from '@/data/content';

type Props = {
  articles: Article[];
  onOpen: (id: string) => void;
};

export default function StoryGrid({ articles, onOpen }: Props) {
  if (articles.length < 2) return null;
  const [a, b] = articles;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 pt-8 pb-8 border-b-2 border-ink">
      {/* Story A — larger */}
      <div className="md:pr-8 md:border-r md:border-ink/15">
        <StoryCardLarge article={a} onOpen={onOpen} />
      </div>
      {/* Story B — medium */}
      <div className="md:pl-8">
        <StoryCardLarge article={b} onOpen={onOpen} />
      </div>
    </div>
  );
}

function StoryCardLarge({ article, onOpen }: { article: Article; onOpen: (id: string) => void }) {
  return (
    <article className="flex flex-col">
      {article.image && (
        <div
          className="overflow-hidden cursor-pointer group mb-4"
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
        className="headline-major text-2xl md:text-3xl mb-3 cursor-pointer hover:opacity-80 transition-opacity"
        onClick={() => onOpen(article.id)}
      >
        {article.headline}
      </h3>
      <p className="font-body text-base leading-relaxed text-ink/75 mb-3">
        {article.dek}
      </p>
      <div className="meta-label text-ink/60 mt-auto">
        BY {article.author} · {article.date} · {article.readTime}
      </div>
    </article>
  );
}
