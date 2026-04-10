import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[oklch(0.96_0.02_85)] px-4" style={{ fontFamily: "'Noto Serif SC', serif" }}>
      <div className="text-center border-2 border-[oklch(0.15_0.02_30)] p-12 bg-white max-w-md" style={{ boxShadow: '6px 6px 0 oklch(0.15 0.02 30)' }}>
        <div className="text-6xl font-black text-[oklch(0.45_0.22_25)] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
          404
        </div>
        <div className="text-xl font-bold text-[oklch(0.15_0.02_30)] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
          页面跌停了
        </div>
        <p className="text-[oklch(0.55_0.02_30)] text-sm mb-6">
          这个页面已经跌停，无法访问。就像你持仓的股票一样，找不到了。
        </p>
        <button
          onClick={() => setLocation('/')}
          className="inline-block bg-[oklch(0.45_0.22_25)] text-white font-bold px-6 py-2 hover:bg-[oklch(0.38_0.22_25)] transition-colors"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          返回首页
        </button>
      </div>
    </div>
  );
}
