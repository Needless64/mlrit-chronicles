type Props = {
  onNavigate: (page: string) => void;
};

const sections = ['NEWS', 'CAMPUS', 'TECHNOLOGY', 'STUDENT LIFE', 'CULTURE', 'SPORTS', 'OPINION', 'EVENTS'];
const about = ['ABOUT', 'CONTACT', 'EDITORIAL POLICY', 'PRIVACY'];

export default function Footer({ onNavigate }: Props) {
  return (
    <footer className="border-t-2 border-ink bg-paper">
      {/* Top */}
      <div className="border-b border-ink/20 py-10 text-center px-4">
        <h2 className="masthead-title text-3xl md:text-4xl mb-2">MLRIT CHRONICLES</h2>
        <p className="meta-label text-ink/60">The Student Newspaper of MLRIT</p>
      </div>

      {/* Links */}
      <div className="max-w-editorial mx-auto px-4 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Sections */}
          <div className="col-span-2 md:col-span-2">
            <h3 className="meta-label text-ink/50 mb-4">Sections</h3>
            <div className="grid grid-cols-2 gap-y-2">
              {sections.map((s) => (
                <button
                  key={s}
                  onClick={() => onNavigate(s)}
                  className="font-sans text-sm font-medium text-left hover:underline underline-offset-2 transition-all w-fit"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="meta-label text-ink/50 mb-4">About</h3>
            <ul className="space-y-2">
              {about.map((a) => (
                <li key={a}>
                  <button className="font-sans text-sm font-medium text-left hover:underline underline-offset-2 transition-all">
                    {a}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className="meta-label text-ink/50 mb-4">Subscribe</h3>
            <p className="font-body text-sm text-ink/70 mb-3">
              Get the weekly edition delivered to your inbox.
            </p>
            <div className="flex border border-ink">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-3 py-2 font-sans text-sm bg-transparent outline-none placeholder:text-ink/40"
              />
              <button className="bg-ink text-paper px-4 font-sans text-xs font-bold uppercase tracking-editorial-wide hover:bg-ink/80 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t-2 border-ink py-5 px-4 text-center">
        <p className="meta-label text-ink/50">
          © 2026 MLRIT Chronicles · Hyderabad, India
        </p>
      </div>
    </footer>
  );
}
