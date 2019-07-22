import mongoose, { Schema } from 'mongoose';

const productSchema = Schema(
  {
    img: { data: Buffer, contentType: String },
    sku: Number,
    title: String,
    description: String,
    availableSizes: Array,
    price: Number,
    isFreeShipping: Boolean,
  },
  { timestamps: true }
);
export default mongoose.model('Product', productSchema);
