import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Plane, Calendar, ExternalLink, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { deals, getCountryFlag } from "@/data/deals";
import { getDestinationImage } from "@/data/destinationImages";

const DealDetail = () => {
  const { id } = useParams();
  const deal = deals.find((d) => d.id === id);

  if (!deal) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center">
        <p className="mb-4 text-lg text-muted-foreground">Oferta no encontrada</p>
        <Button asChild variant="outline">
          <Link to="/ofertas">Volver a ofertas</Link>
        </Button>
      </div>
    );
  }

  const flag = getCountryFlag(deal.pais);
  const image = getDestinationImage(deal.destino);
  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("es-ES", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-sky py-8">
      <div className="container mx-auto max-w-3xl px-4">
        {/* Back */}
        <Link
          to="/ofertas"
          className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" /> Volver a ofertas
        </Link>

        {/* Main card */}
        <div className="overflow-hidden rounded-xl border border-border bg-card shadow-card">
          {/* Destination image */}
          {image && (
            <div className="relative h-48 sm:h-64 overflow-hidden">
              <img
                src={image}
                alt={deal.destino}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <p className="text-sm font-medium opacity-80">
                  {deal.tipo === "ida_vuelta" ? "Ida y vuelta" : "Solo ida"} · {deal.aerolinea}
                </p>
                <p className="mt-1 font-display text-5xl font-extrabold">
                  {deal.precio_eur}€
                </p>
              </div>
            </div>
          )}

          {/* Price banner - only if no image */}
          {!image && (
          <div className="bg-primary px-6 py-8 text-center">
            <p className="text-sm font-medium text-primary-foreground/80">
              {deal.tipo === "ida_vuelta" ? "Ida y vuelta" : "Solo ida"} · {deal.aerolinea}
            </p>
            <p className="mt-2 font-display text-5xl font-extrabold text-primary-foreground">
              {deal.precio_eur}€
            </p>
          </div>
          )}

          {/* Route */}
          <div className="flex items-center justify-center gap-6 border-b border-border px-6 py-6">
            <div className="text-center">
              <p className="font-display text-2xl font-bold text-foreground">
                {deal.origen_iata}
              </p>
              <p className="text-sm text-muted-foreground">{deal.origen_ciudad}</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <ArrowRight className="h-5 w-5 text-primary" />
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
            <div className="text-center">
              <p className="font-display text-2xl font-bold text-foreground">
                {deal.destino_iata}
              </p>
              <p className="text-sm text-muted-foreground">
                {flag} {deal.destino}
              </p>
            </div>
          </div>

          {/* Details */}
          <div className="space-y-4 px-6 py-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex items-start gap-3">
                <Calendar className="mt-0.5 h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">Salida</p>
                  <p className="text-sm font-medium text-foreground">
                    {formatDate(deal.fecha_salida)}
                  </p>
                </div>
              </div>
              {deal.fecha_regreso && (
                <div className="flex items-start gap-3">
                  <Calendar className="mt-0.5 h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-xs text-muted-foreground">Regreso</p>
                    <p className="text-sm font-medium text-foreground">
                      {formatDate(deal.fecha_regreso)}
                    </p>
                  </div>
                </div>
              )}
              <div className="flex items-start gap-3">
                <Plane className="mt-0.5 h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">Aerolínea</p>
                  <p className="text-sm font-medium text-foreground">{deal.aerolinea}</p>
                </div>
              </div>
            </div>

            {deal.notas && (
              <div className="rounded-lg bg-muted/50 p-4">
                <p className="text-sm text-muted-foreground">{deal.notas}</p>
              </div>
            )}

            <Button asChild size="lg" className="w-full gap-2">
              <a href={deal.url_afiliado} target="_blank" rel="noopener noreferrer">
                Reservar ahora <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealDetail;
