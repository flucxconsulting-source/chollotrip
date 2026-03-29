import tokio from "@/assets/destinations/tokio.jpg";
import buenosAires from "@/assets/destinations/buenos-aires.jpg";
import oslo from "@/assets/destinations/oslo.jpg";
import bangkok from "@/assets/destinations/bangkok.jpg";
import nuevaYork from "@/assets/destinations/nueva-york.jpg";
import singapur from "@/assets/destinations/singapur.jpg";
import pekin from "@/assets/destinations/pekin.jpg";
import bali from "@/assets/destinations/bali.jpg";
import yakarta from "@/assets/destinations/yakarta.jpg";
import maldivas from "@/assets/destinations/maldivas.jpg";
import sanFrancisco from "@/assets/destinations/san-francisco.jpg";
import milan from "@/assets/destinations/milan.jpg";
import laValeta from "@/assets/destinations/la-valeta.jpg";
import shanghai from "@/assets/destinations/shanghai.jpg";
import lima from "@/assets/destinations/lima.jpg";
import budapest from "@/assets/destinations/budapest.jpg";
import marrakech from "@/assets/destinations/marrakech.jpg";
import londres from "@/assets/destinations/londres.jpg";

const destinationImages: Record<string, string> = {
  "Tokio": tokio,
  "Buenos Aires": buenosAires,
  "Oslo": oslo,
  "Bangkok": bangkok,
  "Nueva York": nuevaYork,
  "Singapur": singapur,
  "Pekín": pekin,
  "Bali (Denpasar)": bali,
  "Yakarta": yakarta,
  "Maldivas": maldivas,
  "San Francisco": sanFrancisco,
  "Milán": milan,
  "La Valeta": laValeta,
  "Shanghái": shanghai,
  "Lima": lima,
  "Budapest": budapest,
  "Marrakech": marrakech,
  "Londres": londres,
};

export const getDestinationImage = (destino: string): string | undefined => {
  return destinationImages[destino];
};
