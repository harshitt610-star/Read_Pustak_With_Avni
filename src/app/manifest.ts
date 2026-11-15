import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Read Pustak with Avni",
    short_name: "Read Pustak",
    description:
      "Every Child Has a Story Worth Sharing. An independent literary publishing initiative founded by young author Avni Chaturvedi and Neena Chaturvedi.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFF9F1",
    theme_color: "#35105F",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/images/logo.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/images/logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}

