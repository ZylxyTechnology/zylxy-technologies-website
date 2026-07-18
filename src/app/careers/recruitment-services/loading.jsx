export default function RecruitmentLoading() {
  return (
    <div className="w-full min-h-screen bg-[#050E21] flex flex-col items-center justify-center px-6 animate-pulse">
      <div className="flex flex-col items-center gap-4 max-w-xl w-full">
        <div className="h-6 w-32 bg-white/5 rounded-full" />
        <div className="h-12 w-full bg-white/5 rounded-xl" />
        <div className="h-4 w-3/4 bg-white/5 rounded" />
        <div className="h-4 w-1/2 bg-white/5 rounded" />
        <div className="w-full h-64 bg-white/5 rounded-2xl mt-12" />
      </div>
    </div>
  );
}
