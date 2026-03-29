import { Link } from "react-router-dom";
import { Plane, ArrowRight, Clock } from "lucide-react";
import { Deal, getCountryFlag } from "@/data/deals";
import { Badge } from "@/components/ui/badge";
import { getDestinationImage } from "@/data/destinationImages";

interface DealCardProps {
  deal: Deal;
}

const DealCard = ({ deal }: DealCardProps) => {
  const flag = getCountryFlag(deal.pais);
  const image = getDestinationImage(deal.destino);

  return (
    <Link
      to={`/oferta/${deal.id}`}
      className="group block overflow-hidden rounded-lg border border-border bg-card shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
    >
      {/* Destination image */}
      {image && (
        <div className="relative h-36 overflow-hidden">
          <img
            src={image}
            alt={deal.destino}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute bottom-2 right-2">
            {deal.directo ? (
              <Badge variant="secondary" className="bg-success/90 text-white border-0 text-xs">
                Directo
              </Badge>
            ) : (
              <Badge variant="outline" className="bg-background/80 text-xs backdrop-blur-sm">
                <Clock className="mr-1 h-3 w-3" /> Escala
              </Badge>
            )}
          </div>
        </div>
      )}

      {/* Route bar - only show if no image */}
      {!image && (
      <div className="flex items-center justify-between bg-muted/50 px-4 py-3">
        <div className="flex items-center gap-2 text-sm font-medium text-foreground">
          <span>{deal.origen_iata}</span>
          <ArrowRight className="h-3.5 w-3.5 text-muted-foreground" />
          <span>{deal.destino_iata}</span>
        </div>
        {deal.directo ? (
          <Badge variant="secondary" className="bg-success/10 text-success border-0 text-xs">
            Directo
          </Badge>
        ) : (
          <Badge variant="outline" className="text-xs">
            <Clock className="mr-1 h-3 w-3" /> Escala
          </Badge>
        )}
      </div>
      )}

      {/* Content */}
      <div className="p-4">
        <div className="mb-3 flex items-start justify-between">
          <div>
            <h3 className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors">
              {flag} {deal.destino}
            </h3>
            <p className="text-sm text-muted-foreground">{deal.pais}</p>
          </div>
          <div className="text-right">
            <p className="font-display text-2xl font-bold text-primary">
              {deal.precio_eur}€
            </p>
            <p className="text-xs text-muted-foreground">
              {deal.tipo === "ida_vuelta" ? "ida y vuelta" : "solo ida"}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Plane className="h-3.5 w-3.5" />
            <span>{deal.aerolinea}</span>
          </div>
          <span>{deal.origen_iata} → {deal.destino_iata}</span>
        </div>
      </div>
    </Link>
  );
};

export default DealCard;
