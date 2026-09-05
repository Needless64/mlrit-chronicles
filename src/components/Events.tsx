import { events } from '@/data/content';

export default function Events() {
  return (
    <section className="border-b-2 border-ink">
      <div className="flex items-center gap-4 pt-8 pb-4">
        <h2 className="font-serif font-black text-3xl md:text-4xl tracking-tight uppercase">
          Events
        </h2>
        <div className="flex-1 border-t-2 border-ink" />
      </div>

      <div className="pb-8">
        {events.map((event, i) => (
          <div
            key={i}
            className={`flex items-center gap-6 py-5 ${
              i < events.length - 1 ? 'border-b border-ink/15' : ''
            } group cursor-pointer hover:bg-ink/[0.03] transition-colors px-2 -mx-2`}
          >
            {/* Date */}
            <div className="text-center shrink-0 w-16 md:w-20">
              <div className="font-serif font-black text-3xl md:text-4xl leading-none">
                {event.day}
              </div>
              <div className="meta-label text-ink/60 mt-1">{event.month}</div>
            </div>

            <div className="w-px h-12 bg-ink/20 shrink-0" />

            {/* Details */}
            <div className="flex-1 min-w-0">
              <h3 className="font-sans font-bold uppercase tracking-editorial-wide text-sm md:text-base group-hover:underline underline-offset-2 transition-all">
                {event.title}
              </h3>
              <p className="font-sans text-[0.75rem] text-ink/60 mt-1">
                {event.location} · {event.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
