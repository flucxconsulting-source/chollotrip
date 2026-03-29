import { useState, useMemo } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import DealCard from "@/components/DealCard";
import { deals } from "@/data/deals";

const Deals = () => {
  const [search, setSearch] = useState("");
  const [origen, setOrigen] = useState("all");
  const [soloDirecto, setSoloDirecto] = useState(false);
  const [sortBy, setSortBy] = useState("price");
  const [showFilters, setShowFilters] = useState(false);

  const origenes = useMemo(
    () => [...new Set(deals.map((d) => d.origen_ciudad))],
    []
  );

  const filtered = useMemo(() => {
    let result = deals.filter((d) => d.activo);

    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (d) =>
          d.destino.toLowerCase().includes(q) ||
          d.pais.toLowerCase().includes(q) ||
          d.aerolinea.toLowerCase().includes(q)
      );
    }

    if (origen !== "all") {
      result = result.filter((d) => d.origen_ciudad === origen);
    }

    if (soloDirecto) {
      result = result.filter((d) => d.directo);
    }

    if (sortBy === "price") {
      result.sort((a, b) => a.precio_eur - b.precio_eur);
    } else {
      result.sort(
        (a, b) =>
          new Date(a.fecha_salida).getTime() -
          new Date(b.fecha_salida).getTime()
      );
    }

    return result;
  }, [search, origen, soloDirecto, sortBy]);

  return (
    <div className="min-h-screen bg-gradient-sky py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="font-display text-3xl font-bold text-foreground">
            Todas las ofertas
          </h1>
          <p className="mt-1 text-muted-foreground">
            {filtered.length} chollos disponibles
          </p>
        </div>

        {/* Search & filters */}
        <div className="mb-6 space-y-4">
          <div className="flex gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Buscar destino, país o aerolínea..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              <SlidersHorizontal className="h-4 w-4" />
              <span className="hidden sm:inline">Filtros</span>
            </button>
          </div>

          {showFilters && (
            <div className="flex flex-wrap items-end gap-4 rounded-lg border border-border bg-card p-4 animate-fade-in-up">
              <div className="min-w-[160px]">
                <Label className="mb-1.5 text-xs text-muted-foreground">Origen</Label>
                <Select value={origen} onValueChange={setOrigen}>
                  <SelectTrigger>
                    <SelectValue placeholder="Todos" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos</SelectItem>
                    {origenes.map((o) => (
                      <SelectItem key={o} value={o}>{o}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="min-w-[160px]">
                <Label className="mb-1.5 text-xs text-muted-foreground">Ordenar por</Label>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="price">Precio</SelectItem>
                    <SelectItem value="date">Fecha</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center gap-2">
                <Switch id="directo" checked={soloDirecto} onCheckedChange={setSoloDirecto} />
                <Label htmlFor="directo" className="text-sm">Solo directos</Label>
              </div>
            </div>
          )}
        </div>

        {/* Results */}
        {filtered.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((deal) => (
              <DealCard key={deal.id} deal={deal} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <p className="text-lg font-medium text-muted-foreground">
              No se encontraron ofertas
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Prueba a cambiar los filtros
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Deals;
