import trustedBrands from "../models/trusted-brands.model";

const getTrustedBrands = async (req: any, res: any) => {
  try {
    res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    const { publishedDate } = req.query;

    const filter = publishedDate
      ? { publishedDate: { $gte: publishedDate } }
      : {};
    // check if filter is empty
    if (Object.keys(filter).length !== 0) {
      const isValidDate = isValidDateFormat(publishedDate);
      if (!isValidDate) {
        return res
          .status(400)
          .json({ message: "Invalid publishedDate format" });
      }
    }

    const trustedBrandsList = await trustedBrands
      .find(filter)
      .sort({ title: 1 });
    if (trustedBrandsList.length === 0) {
      res.status(404).json({ message: "No trusted brands found." });
    } else {
      res.status(200).json(trustedBrandsList);
    }
  } catch (err: any) {
    console.error(err.message);
    res
      .status(500)
      .json({ message: "An error occurred. Please try again later." });
  }
};

// Helper function to validate date format
const isValidDateFormat = (date: string) => {
  //Validate Date Format
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  return dateRegex.test(date);
};

const syncBrands = async (req: any, res: any) => {
  try {
    // Default data
    const defaultBrands = [
      { "id": "1", "src": "./kjd-assets/wesgrow-black.svg", "title": "WesGrow" },
    { "id": "2", "src": "./kjd-assets/visa-black.svg", "title": "Visa" },
    { "id": "3", "src": "./kjd-assets/tfg-black.svg", "title": "TFG" },
    { "id": "4", "src": "./kjd-assets/spotify-black.svg", "title": "Spotify" },
    { "id": "5", "src": "./kjd-assets/santam-black.svg", "title": "Santam" },
    { "id": "6", "src": "./kjd-assets/sanlam-black.svg", "title": "Sanlam" },
    { "id": "7", "src": "./kjd-assets/pnp-black.svg", "title": "PnP" },
    { "id": "8", "src": "./kjd-assets/nike-black.svg", "title": "Nike" },
    {
      "id": "10",
      "src": "./kjd-assets/multichoice-black.svg",
      "title": "Multichoice"
    },
    {
      "id": "11",
      "src": "./kjd-assets/microsoft-black.svg",
      "title": "Microsoft"
    },
    { "id": "12", "src": "./kjd-assets/engen-black.svg", "title": "Engen" },
    { "id": "13", "src": "./kjd-assets/distell-black.svg", "title": "Distell" },
    { "id": "14", "src": "./kjd-assets/bbc-black.svg", "title": "BBC" },
    { "id": "15", "src": "./kjd-assets/liquid-black.svg", "title": "Liquid" },
    { "id": "16", "src": "./kjd-assets/tyme-bank-black.svg", "title": "Tyme Bank"}
    ];

    // Insert default data into the TrustedBrands collection
    await trustedBrands.insertMany(defaultBrands);

    console.log("Default data inserted into the database.");
    return res
          .status(200)
          .json({ message: "Default data inserted into the database." });
  } catch (error) {
    console.error("Error inserting default data:", error);
  }
};

const trustedBrandsControllers = {
  getTrustedBrands,
  syncBrands,
};
export default trustedBrandsControllers;
