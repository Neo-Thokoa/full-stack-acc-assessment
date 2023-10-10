import trustedBrands from "./models/trusted-brands.model";
import { defaultBrands } from "./data/seedData";

export async function seedDatabase() {
  try {
    for (const brand of defaultBrands) {
      const brandExists = await trustedBrands.findOne({ title: brand.title });
      if (!brandExists) {
        await trustedBrands.create(brand);
      }
    }
    console.log("Database seeded successfully");
    
  } catch (error) {
    console.error("Error seeding database:", error);
  }
}
