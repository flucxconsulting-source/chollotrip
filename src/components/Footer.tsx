import { Plane } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-muted/50 py-10">
    <div className="container mx-auto px-4">
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="flex items-center gap-2">
          <Plane className="h-5 w-5 text-primary" />
          <span className="font-display text-lg font-bold text-foreground">
            Chollo<span className="text-primary">Trip</span>
          </span>
        </div>

        <p className="max-w-md text-sm text-muted-foreground">
          CholloTrip es un sitio web independiente que recopila ofertas de vuelos,
          hoteles y viajes baratos desde España. Nuestro objetivo es ayudarte a
          ahorrar dinero en cada viaje mediante comparativas y guías prácticas.
        </p>

        {/* LEGAL + TRUST LINKS */}
        <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground mt-4">
          <Link to="/privacy" className="hover:underline">
            Privacidad
          </Link>
          <Link to="/terms" className="hover:underline">
            Términos
          </Link>
          <Link to="/cookies" className="hover:underline">
            Cookies
          </Link>
          <Link to="/contacto" className="hover:underline">
            Contacto
          </Link>
        </div>

        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} CholloTrip. Todos los derechos reservados.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;