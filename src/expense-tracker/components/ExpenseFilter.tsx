import categories from "../categories";

interface property {
  onSelectCategory: (category: string) => void;
}
const ExpenseFilter = ({ onSelectCategory }: property) => {
  return (
    <select
      className="form-select"
      onChange={(event) => onSelectCategory(event?.target.value)}
    >
      <option value="">All Categories</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default ExpenseFilter;
