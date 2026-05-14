const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 w-full">
      <span className="loading loading-spinner loading-lg text-primary"></span>
      <p className="mt-4 font-bold text-primary animate-pulse italic uppercase tracking-widest">
        Fetching Aesthetic Tiles...
      </p>
    </div>
  );
};
export default Loader;