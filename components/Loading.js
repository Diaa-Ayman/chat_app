export default function Loading() {
  return (
    <div className="grid place-items-center h-screen">
      <div className="text-2xl font-semibold text-red-600 flex items-center space-x-2">
        <div className="animate-spin text-3xl h-10 w-10 border-2 border-b-red-600 rounded-full"></div>
        <div>LOADING...</div>
      </div>
    </div>
  );
}
