export const ServicesFilter = ({ categories, activeTab, onTabChange, getCategoryCount }) => {
  return (
    <div className="w-full flex flex-col items-start gap-4">
      {/* Mobile Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full lg:hidden">
        {categories.map((cat) => {
          const isActive = activeTab === cat.id;
          const count = getCategoryCount(cat.id);
          return (
            <button
              key={cat.id}
              onClick={() => onTabChange(cat.id)}
              aria-pressed={isActive}
              className={`w-full min-w-0 px-3 py-2.5 rounded-xl text-xs font-semibold font-inter cursor-pointer text-center outline-none border transition-all duration-300 flex items-center justify-center gap-2 ${
                isActive
                  ? "bg-primary text-primary-foreground border-primary shadow-[0_0_15px_rgba(37,99,235,0.2)]"
                  : "bg-white/5 text-muted-foreground border-white/10 hover:bg-white/10 hover:text-foreground"
              }`}
            >
              <span className="truncate">{cat.label}</span>
              <span
                className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md transition-all duration-200 ${
                  isActive ? "bg-white/20 text-white" : "bg-white/5 text-muted-foreground"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Desktop Segmented Control */}
      <div className="hidden lg:inline-flex flex-wrap items-center gap-2 p-1.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl shadow-sm transition-all duration-300">
        {categories.map((cat) => {
          const isActive = activeTab === cat.id;
          const count = getCategoryCount(cat.id);
          return (
            <button
              key={cat.id}
              onClick={() => onTabChange(cat.id)}
              aria-pressed={isActive}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold font-inter cursor-pointer outline-none border transition-all duration-300 flex items-center gap-2 whitespace-nowrap shrink-0 ${
                isActive
                  ? "bg-primary text-primary-foreground border-primary shadow-[0_4px_20px_rgba(37,99,235,0.25)]"
                  : "bg-transparent text-muted-foreground border-transparent hover:bg-white/5 hover:text-foreground hover:border-white/10"
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`text-[10px] font-bold px-2 py-0.5 rounded-md transition-all duration-200 ${
                  isActive ? "bg-white/20 text-white" : "bg-white/5 text-muted-foreground"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
