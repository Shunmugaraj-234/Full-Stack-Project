export default function FilterPanel({ filter, setFilter }) {
  return (
    <select
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
      className="px-4 py-2 border rounded-lg"
    >
      <option value="All">All</option>
      <option value="Central">Central</option>
      <option value="State">State</option>
    </select>
  );
}