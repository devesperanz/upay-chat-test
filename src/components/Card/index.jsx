function index({ title, cardType, benefits, features, applyLink }) {
  // Function to get color based on the title
  const getColor = (title) => {
    if (title.toLowerCase().includes("gold")) {
      return "#79eb76"; // Green color for Gold Card
    } else if (title.toLowerCase().includes("platinum")) {
      return "#1976d2"; // Blue color for Platinum Card
    } else {
      return "#fca5a5"; // Red color for other cards
    }
  };

  const cardColor = getColor(title);

  return (
    <div
      className={`bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200`}
    >
      <div
        className={`px-6 py-4 text-white`}
        style={{ backgroundColor: cardColor }}
      >
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-sm font-semibold uppercase">{cardType}</p>
      </div>

      <div className="px-6 py-4">
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Benefits:</h3>
          <ul className="list-disc list-inside">
            {benefits.map((benefit, index) => (
              <li key={index} className="text-sm text-gray-800">
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Features:</h3>
          <ul className="list-disc list-inside">
            {features.map((feature, index) => (
              <li key={index} className="text-sm text-gray-800">
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={`px-6 py-4 bg-${cardColor}-100 border-t border-gray-200`}>
        <a
          href={applyLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`block w-full text-center bg-white text-gray-800 font-semibold py-2 px-4 rounded-md shadow-md hover:shadow-lg transition duration-300 ease-in-out`}
          style={{ backgroundColor: cardColor }}
        >
          Apply Now
        </a>
      </div>
    </div>
  );
}

export default index;
