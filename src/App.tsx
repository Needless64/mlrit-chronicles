import Header from '@/components/Header';
import BreakingNews from '@/components/BreakingNews';
import LeadStory from '@/components/LeadStory';
import StoryGrid from '@/components/StoryGrid';
import NewsSection from '@/components/NewsSection';
import MostRead from '@/components/MostRead';
import OpinionSection from '@/components/OpinionSection';
import FeatureStory from '@/components/FeatureStory';
import Events from '@/components/Events';
import Footer from '@/components/Footer';
import SearchOverlay from '@/components/SearchOverlay';
import ArticlePage from '@/components/ArticlePage';
import { useState } from 'react';
import {
  leadStory,
  secondaryStories,
  campusStories,
  techStories,
  studentLifeStories,
  cultureStories,
  sportsStories,
  opinionPieces,
  featureStory,
  allArticles,
} from '@/data/content';

type View = { type: 'home' } | { type: 'article'; id: string } | { type: 'section'; name: string };

function App() {
  const [view, setView] = useState<View>({ type: 'home' });
  const [searchOpen, setSearchOpen] = useState(false);

  const openArticle = (id: string) => {
    setView({ type: 'article', id });
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const goHome = () => {
    setView({ type: 'home' });
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const goSection = (name: string) => {
    setView({ type: 'section', name });
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleNav = (page: string) => {
    if (page === 'home') goHome();
    else goSection(page);
  };

  // Article view
  if (view.type === 'article') {
    const article = allArticles.find((a) => a.id === view.id);
    if (article) {
      return (
        <div className="min-h-screen bg-paper">
          <Header onNavigate={handleNav} onSearch={() => setSearchOpen(true)} />
          <ArticlePage article={article} onBack={goHome} onOpen={openArticle} />
          <Footer onNavigate={handleNav} />
        </div>
      );
    }
  }

  // Section view
  if (view.type === 'section') {
    const sectionName = view.name;
    const sectionArticles = allArticles.filter(
      (a) => a.category.toUpperCase() === sectionName
    );

    return (
      <div className="min-h-screen bg-paper">
        {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} onOpen={openArticle} />}
        <Header onNavigate={handleNav} onSearch={() => setSearchOpen(true)} />
        <div className="max-w-editorial mx-auto px-4 pt-10 pb-10">
          <div className="flex items-center gap-4 mb-8">
            <h1 className="font-serif font-black text-4xl md:text-6xl tracking-tight uppercase">
              {sectionName}
            </h1>
            <div className="flex-1 border-t-2 border-ink" />
          </div>

          {sectionArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-0">
              {sectionArticles.map((article, i) => (
                <div
                  key={article.id}
                  className={`pb-8 md:pb-0 ${
                    i < sectionArticles.length - 1 ? 'md:border-r md:border-ink/15' : ''
                  } md:px-4 first:md:pl-0 last:md:pr-0`}
                >
                  <article className="flex flex-col h-full cursor-pointer group" onClick={() => openArticle(article.id)}>
                    {article.image && (
                      <div className="overflow-hidden mb-3">
                        <img
                          src={article.image}
                          alt={article.imageAlt || article.headline}
                          className="w-full aspect-[16/10] object-cover grayscale contrast-125 group-hover:scale-[1.02] transition-transform duration-500"
                        />
                      </div>
                    )}
                    <span className="section-label text-ink mb-2">{article.category}</span>
                    <h3 className="headline-major text-xl md:text-2xl mb-2 group-hover:underline underline-offset-2 transition-all">
                      {article.headline}
                    </h3>
                    <p className="font-body text-sm text-ink/75 mb-3">{article.dek}</p>
                    <div className="meta-label text-ink/60 mt-auto">
                      {article.date} · {article.readTime}
                    </div>
                  </article>
                </div>
              ))}
            </div>
          ) : (
            <p className="font-body text-lg text-ink/60">
              No stories in this section yet. Check back soon.
            </p>
          )}
        </div>
        <Footer onNavigate={handleNav} />
      </div>
    );
  }

  // Home view
  return (
    <div className="min-h-screen bg-paper">
      {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} onOpen={openArticle} />}
      <Header onNavigate={handleNav} onSearch={() => setSearchOpen(true)} />
      <BreakingNews />

      <main className="max-w-editorial mx-auto px-4">
        {/* Lead story */}
        <LeadStory article={leadStory} onOpen={openArticle} />

        {/* Secondary stories */}
        <StoryGrid articles={secondaryStories} onOpen={openArticle} />

        {/* Campus + Most Read sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-0 pt-8 pb-8 border-b-2 border-ink">
          <div className="lg:col-span-2 lg:pr-8 lg:border-r lg:border-ink/15">
            <div className="flex items-center gap-4 mb-6">
              <h2 className="font-serif font-black text-3xl md:text-4xl tracking-tight uppercase">
                Campus
              </h2>
              <div className="flex-1 border-t-2 border-ink" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
              {campusStories.map((article, i) => (
                <div
                  key={article.id}
                  className={`pb-6 md:pb-0 ${i < campusStories.length - 1 ? 'md:border-r md:border-ink/15' : ''} md:px-4 first:md:pl-0 last:md:pr-0`}
                >
                  <article className="flex flex-col h-full cursor-pointer group" onClick={() => openArticle(article.id)}>
                    <span className="section-label text-ink mb-2">{article.category}</span>
                    <h3 className="headline-brief text-lg mb-2 group-hover:underline underline-offset-2 transition-all">
                      {article.headline}
                    </h3>
                    <p className="font-body text-sm text-ink/75 mb-3">{article.dek}</p>
                    <div className="meta-label text-ink/60 mt-auto">
                      {article.date} · {article.readTime}
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:pl-8">
            <MostRead />
          </div>
        </div>

        {/* Technology */}
        <NewsSection title="Technology" articles={techStories} onOpen={openArticle} columns={2} />

        {/* Student Life */}
        <NewsSection title="Student Life" articles={studentLifeStories} onOpen={openArticle} columns={2} />

        {/* Feature */}
        <FeatureStory article={featureStory} onOpen={openArticle} />

        {/* Culture */}
        <NewsSection title="Culture" articles={cultureStories} onOpen={openArticle} columns={2} />

        {/* Sports */}
        <NewsSection title="Sports" articles={sportsStories} onOpen={openArticle} columns={2} />

        {/* Opinion */}
        <OpinionSection articles={opinionPieces} onOpen={openArticle} />

        {/* Events */}
        <Events />
      </main>

      <Footer onNavigate={handleNav} />
    </div>
  );
}

export default App;
