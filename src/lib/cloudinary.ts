import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY || process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export default cloudinary;

/**
 * Returns an optimized Cloudinary delivery URL for an image.
 */
export function getOptimizedImageUrl(
  publicIdOrUrl: string,
  transformations: string = "f_auto,q_auto"
): string {
  // If already a full URL
  if (publicIdOrUrl.startsWith("http://") || publicIdOrUrl.startsWith("https://")) {
    return publicIdOrUrl;
  }
  const cloudName =
    process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME ||
    process.env.CLOUDINARY_CLOUD_NAME;
  if (!cloudName) return publicIdOrUrl;

  return `https://res.cloudinary.com/${cloudName}/image/upload/${transformations}/${publicIdOrUrl}`;
}

/**
 * Returns a Cloudinary delivery URL for a video.
 */
export function getCloudinaryVideoUrl(
  publicIdOrUrl: string,
  transformations: string = "f_auto,q_auto"
): string {
  if (publicIdOrUrl.startsWith("http://") || publicIdOrUrl.startsWith("https://")) {
    return publicIdOrUrl;
  }
  const cloudName =
    process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME ||
    process.env.CLOUDINARY_CLOUD_NAME;
  if (!cloudName) return publicIdOrUrl;

  return `https://res.cloudinary.com/${cloudName}/video/upload/${transformations}/${publicIdOrUrl}`;
}
