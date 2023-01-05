import mongoose from 'mongoose';

const ImageSchema = new mongoose.Schema(
    {
        images: [
            {
                location: { type: String, required: true },
            },
        ]
    },
    {
        timestamps: time
    }
);

export const ImageModel = mongoose.model("images", ImageSchema);