import { useState, useMemo } from "react";
import { Search, Star, ExternalLink, BedDouble } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { hotels } from "@/data/hotels";
import { getCountryFlag } from "@/data/deals";

const Hotels = () => {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    if (!search) return hotels;
    const q = search.toLowerCase();
    return hotels.filter(
      (h) =>
        h.nombre.toLowerCase().includes(q) ||
        h.ciudad.toLowerCase().includes(q) ||
        h.pais.toLowerCase().includes(q)
    );
  }, [search]);

  return (
    <div className="min-h-screen bg-gradient-sky py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="font-display text-3xl font-bold text-foreground">
            Hoteles recomendados
          </h1>
          <p className="mt-1 text-muted-foreground">
            Los mejores alojamientos en cada destino · Enlaces a Booking.com
          </p>
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Buscar hotel, ciudad o país..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Results */}
        {filtered.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((hotel) => (
              <div
                key={hotel.id}
                className="group overflow-hidden rounded-lg border border-border bg-card shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={hotel.imagen_url}
                    alt={hotel.nombre}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-2 right-2">
                    <Badge variant="secondary" className="bg-accent text-accent-foreground border-0 text-xs font-semibold">
                      Desde {hotel.precio_desde_eur}€/noche
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <div className="mb-2">
                    <h3 className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {hotel.nombre}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {getCountryFlag(hotel.pais)} {hotel.ciudad}, {hotel.pais}
                    </p>
                  </div>

                  {/* Stars */}
                  <div className="mb-3 flex items-center gap-0.5">
                    {Array.from({ length: hotel.estrellas }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" />
                    ))}
                  </div>

                  <p className="mb-4 text-sm text-muted-foreground line-clamp-2">
                    {hotel.descripcion}
                  </p>

                  <Button asChild className="w-full gap-2" size="sm">
                    <a
                      href={hotel.url_afiliado}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver en Booking.com <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <BedDouble className="mx-auto mb-3 h-10 w-10 text-muted-foreground" />
            <p className="text-lg font-medium text-muted-foreground">
              No se encontraron hoteles
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Prueba con otra búsqueda
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hotels;
