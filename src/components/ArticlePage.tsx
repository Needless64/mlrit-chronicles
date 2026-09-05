import { ArrowLeft } from 'lucide-react';
import type { Article } from '@/data/content';
import { allArticles } from '@/data/content';

type Props = {
  article: Article;
  onBack: () => void;
  onOpen: (id: string) => void;
};

export default function ArticlePage({ article, onBack, onOpen }: Props) {
  const related = allArticles
    .filter((a) => a.id !== article.id && a.category === article.category)
    .slice(0, 3);

  const fallbackRelated = related.length < 3
    ? [...related, ...allArticles.filter((a) => a.id !== article.id && a.id !== related[0]?.id).slice(0, 3 - related.length)]
    : related;

  return (
    <article>
      {/* Back button */}
      <div className="border-b border-ink/20">
        <div className="max-w-editorial mx-auto px-4 py-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-editorial-wide hover:opacity-60 transition-opacity"
          >
            <ArrowLeft size={16} strokeWidth={2.5} />
            Back to Front Page
          </button>
        </div>
      </div>

      {/* Article header */}
      <div className="max-w-article mx-auto px-4 pt-10 pb-8 text-center">
        <span className="section-label text-ink mb-4 block">{article.category}</span>
        <h1 className="headline-lead text-3xl md:text-4xl lg:text-5xl mb-5">
          {article.headline}
        </h1>
        {article.dek && (
          <p className="font-body text-lg md:text-xl leading-relaxed text-ink/75 mb-5">
            {article.dek}
          </p>
        )}
        <div className="meta-label text-ink/60">
          BY {article.author} · {article.date} · {article.readTime}
        </div>
      </div>

      {/* Hero image */}
      {article.image && (
        <div className="max-w-editorial mx-auto px-4 mb-8">
          <img
            src={article.image}
            alt={article.imageAlt || article.headline}
            className="w-full aspect-[16/9] object-cover grayscale contrast-125"
          />
          {article.imageCaption && (
            <p className="font-sans text-[0.7rem] text-ink/60 mt-2 italic leading-relaxed">
              {article.imageCaption}
            </p>
          )}
        </div>
      )}

      {/* Body */}
      <div className="max-w-article mx-auto px-4 pb-12">
        {/* Pull quote after first paragraph */}
        {article.body.map((para, i) => (
          <div key={i}>
            <p className="article-body mb-5 first:first-letter:font-serif first:first-letter:text-6xl first:first-letter:font-black first:first-letter:float-left first:first-letter:mr-2 first:first-letter:leading-[0.85]">
              {para}
            </p>
            {article.pullQuote && i === 0 && (
              <blockquote className="pull-quote text-center max-w-lg mx-auto">
                "{article.pullQuote}"
              </blockquote>
            )}
          </div>
        ))}
      </div>

      {/* Related stories */}
      {fallbackRelated.length > 0 && (
        <section className="border-t-2 border-ink">
          <div className="max-w-editorial mx-auto px-4 pt-8 pb-10">
            <div className="flex items-center gap-4 mb-6">
              <h2 className="font-serif font-black text-2xl uppercase tracking-tight">
                Related Stories
              </h2>
              <div className="flex-1 border-t-2 border-ink" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
              {fallbackRelated.map((r, i) => (
                <div
                  key={r.id}
                  className={`md:px-4 first:md:pl-0 last:md:pr-0 ${
                    i < fallbackRelated.length - 1 ? 'md:border-r md:border-ink/15' : ''
                  }`}
                >
                  <article
                    className="cursor-pointer group"
                    onClick={() => onOpen(r.id)}
                  >
                    <span className="section-label text-ink mb-2 block">{r.category}</span>
                    <h3 className="headline-brief text-lg mb-2 group-hover:underline underline-offset-2 transition-all">
                      {r.headline}
                    </h3>
                    <p className="font-body text-sm text-ink/70 mb-2 line-clamp-2">{r.dek}</p>
                    <p className="meta-label text-ink/50">{r.date} · {r.readTime}</p>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
