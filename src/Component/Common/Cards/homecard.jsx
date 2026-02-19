export default function HighQualityCard({ title, description }) {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-white/10 bg-white/10 backdrop-blur-2xl shadow-2xl">
      <div className="h-full bg-gradient-to-b from-black/60 via-black/35 to-white/40">
        <div className="p-8">
          <div className="mb-6">
            <div className="grid w-10 grid-cols-2 gap-2">
              <span className="h-3 w-3 rounded-full bg-lime-300" />
              <span className="h-3 w-3 rounded-full bg-lime-300" />
              <span className="h-3 w-3 rounded-full bg-lime-300" />
              <span className="h-5 w-5 rounded-full bg-lime-300" />
            </div>
          </div>

          <div className="h-px w-full bg-white/15" />

          <div className="mt-6">
            <h3 className="text-2xl font-semibold tracking-tight text-white">
              {title}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-white/60">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
