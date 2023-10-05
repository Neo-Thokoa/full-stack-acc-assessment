import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const trustedBrandsSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  src: {
    type: String,
    required: true,
  },
  publishedDate: {
    type: Date
  },
  title: {
    type: String,
    required: true,
  },
});

export default mongoose.model('TrustedBrands', trustedBrandsSchema);