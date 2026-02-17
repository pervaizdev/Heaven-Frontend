export default function PropertyFilter() {
  return (
    
      <div className="py-14 flex gap-4 justify-center">

        <select className="w-1/5 rounded-full bg-gray-200 px-6 text-lg font-medium text-gray-700">
          <option>Project Status</option>
          <option>Completed</option>
          <option>Under Construction</option>
        </select>

        <select className="w-1/5 rounded-full bg-gray-200 px-6 text-lg font-medium text-gray-700">
          <option>Project Type</option>
          <option>Apartment</option>
          <option>Building</option>
          <option>Industrail</option>
          <option>Office</option>
          <option>Residential</option>
          <option>Villa</option>
        </select>

        <select className="w-1/5 rounded-full bg-gray-200 px-6 text-lg font-medium text-gray-700">
          <option>Project Location</option>
          <option>New York</option>
          <option>Florida</option>
          <option>New Jersey</option>
          <option>California</option>
        </select>

        <select className="w-1/5 rounded-full bg-gray-200 px-6 text-lg font-medium text-gray-700">
          <option>Project Budget</option>
          <option>$100k - $300k</option>
          <option>$300k - $600k</option>
          <option>$600k - $1M</option>
          <option>$1M+</option>
        </select>

        <button className="w-full lg:w-auto rounded-full bg-lime-200 px-12 py-4 text-lg font-semibold text-black">
          Search
        </button>

      </div>
    
  );
}
