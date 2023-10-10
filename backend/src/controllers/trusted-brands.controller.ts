import trustedBrands from "../models/trusted-brands.model";

const getTrustedBrands = async (req: any, res: any) => {
  try {
    res.set("Access-Control-Allow-Origin", "http://localhost:3000");
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

const trustedBrandsControllers = {
  getTrustedBrands,
};
export default trustedBrandsControllers;
