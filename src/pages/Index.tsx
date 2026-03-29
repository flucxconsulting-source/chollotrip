import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingDown, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import DealCard from "@/components/DealCard";
import Newsletter from "@/components/Newsletter";
import { deals } from "@/data/deals";
import heroImage from "@/assets/hero-travel.jpg";

const Index = () => {
  const featuredDeals = deals.filter((d) => d.activo).slice(0, 6);
  useEffect(() => {
    document.title = "CholloTrip | Vuelos baratos, hoteles y escapadas al mejor precio";

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }

    metaDescription.setAttribute(
      "content",
      "Encuentra vuelos baratos, hoteles económicos y escapadas low cost. En CholloTrip reunimos las mejores ofertas para viajar gastando menos."
    );
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="relative container mx-auto px-4 py-24 md:py-36">
          <div className="max-w-2xl">
            <h1 className="mb-4 font-display text-4xl font-extrabold leading-tight text-card md:text-6xl animate-fade-in-up">
              Viaja más, <span className="text-accent">gasta menos</span>
            </h1>
            <p
              className="mb-8 text-lg text-card/80 animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              Chollos de vuelos desde España actualizados cada día. Desde 25€ ida y vuelta.
            </p>
            <div
              className="flex flex-wrap gap-3 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <Button asChild size="lg" className="gap-2">
                <Link to="/ofertas">
                  Ver ofertas <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>

              <Button asChild size="lg" variant="secondary">
                <Link to="/blog">Ver blog de viajes</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-b border-border bg-card py-8">
        <div className="container mx-auto grid grid-cols-1 gap-6 px-4 sm:grid-cols-3">
          {[
            {
              icon: TrendingDown,
              title: "Precios mínimos",
              desc: "Rastreamos las mejores ofertas del mercado",
            },
            {
              icon: Zap,
              title: "Actualización diaria",
              desc: "Chollos nuevos cada día, no te pierdas nada",
            },
            {
              icon: Shield,
              title: "Enlaces verificados",
              desc: "Solo aerolíneas y agencias de confianza",
            },
          ].map((item) => (
            <div key={item.title} className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-body text-sm font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured deals */}
      <section className="bg-gradient-sky py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="font-display text-3xl font-bold text-foreground">
                Ofertas destacadas
              </h2>
              <p className="mt-1 text-muted-foreground">
                Los chollos más buscados de esta semana
              </p>
            </div>
            <Link
              to="/ofertas"
              className="hidden items-center gap-1 text-sm font-medium text-primary hover:underline sm:flex"
            >
              Ver todas <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuredDeals.map((deal) => (
              <DealCard key={deal.id} deal={deal} />
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Button asChild variant="outline">
              <Link to="/ofertas">Ver todas las ofertas</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="bg-background py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-6">
            <h2 className="font-display text-3xl font-bold text-foreground">
              Chollos de viajes, vuelos baratos y hoteles al mejor precio
            </h2>

            <p className="leading-8 text-muted-foreground">
              En CholloTrip publicamos ofertas de vuelos baratos, hoteles económicos y escapadas para viajar gastando menos. Analizamos precios, detectamos oportunidades y te mostramos opciones reales para ahorrar en cada viaje.
            </p>

            <p className="leading-8 text-muted-foreground">
              Si buscas vuelos desde España, hoteles baratos en el centro de las principales ciudades o ideas para una escapada low cost, aquí encontrarás contenido actualizado y guías prácticas para reservar mejor.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                to="/blog/vuelos-baratos-madrid-roma"
                className="font-medium text-orange-500 hover:underline"
              >
                Ver guía de vuelos baratos Madrid Roma
              </Link>
              <Link
                to="/blog/hoteles-baratos-barcelona-centro"
                className="font-medium text-orange-500 hover:underline"
              >
                Ver guía de hoteles baratos en Barcelona centro
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
};

export default Index;