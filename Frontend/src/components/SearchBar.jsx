export default function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search exam..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="px-4 py-2 border rounded-lg w-full md:w-1/3"
    />
  );
}