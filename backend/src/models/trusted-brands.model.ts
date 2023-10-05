import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const trustedBrandsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
    required: true,
  },
  publishedDate: {
    type: Date,
    required: true,
  },
});

export default mongoose.model('TrustedBrands', trustedBrandsSchema);