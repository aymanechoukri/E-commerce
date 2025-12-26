export default function Loading() {
  return (
    <div className="fixed h-screen flex-col gap-4 w-full flex items-center justify-center z-10 backdrop-blur-xs">
      <div className="w-20 h-20 border-4 border-transparent text-green-500 text-4xl animate-spin flex items-center justify-center border-t-green-500 rounded-full">
        <div className="w-16 h-16 border-4 border-transparent text-orange-500 text-2xl animate-spin flex items-center justify-center border-t-orange-500 rounded-full"></div>
      </div>
    </div>
  );
}
