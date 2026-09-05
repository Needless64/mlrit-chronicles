import type { Article } from '@/data/content';

type Props = {
  article: Article;
  onOpen: (id: string) => void;
};

export default function FeatureStory({ article, onOpen }: Props) {
  return (
    <section className="border-b-2 border-ink bg-ink text-paper">
      <div className="pt-8 pb-8">
        <div className="flex items-center gap-4 mb-6">
          <span className="font-sans font-bold uppercase tracking-editorial-wide text-xs text-paper/70">
            Feature
          </span>
          <div className="flex-1 border-t border-paper/30" />
        </div>

        <div
          className="overflow-hidden cursor-pointer group mb-6"
          onClick={() => onOpen(article.id)}
        >
          <img
            src={article.image}
            alt={article.imageAlt || article.headline}
            className="w-full aspect-[21/9] object-cover grayscale contrast-125 group-hover:scale-[1.01] transition-transform duration-700"
          />
        </div>

        <div className="max-w-article mx-auto text-center">
          <h2
            className="headline-lead text-4xl md:text-5xl lg:text-6xl mb-5 cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => onOpen(article.id)}
          >
            {article.headline}
          </h2>
          <p className="font-body text-lg md:text-xl leading-relaxed text-paper/80 mb-5">
            {article.dek}
          </p>
          <div className="meta-label text-paper/60">
            BY {article.author} · {article.date} · {article.readTime}
          </div>
        </div>
      </div>
    </section>
  );
}
