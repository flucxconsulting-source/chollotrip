import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { blogPosts } from "@/content/blog";

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return (
      <main className="max-w-4xl mx-auto p-6">
        <Helmet>
          <title>Artículo no encontrado | CholloTrip</title>
          <meta name="robots" content="noindex" />
        </Helmet>
        <h1 className="text-3xl font-bold mb-4">Artículo no encontrado</h1>
        <p>El contenido que buscas no existe.</p>
      </main>
    );
  }

  const canonical = `https://www.chollotrip.com/blog/${post.slug}`;

  return (
    <main className="max-w-3xl mx-auto px-6 py-10">
      <Helmet>
        <title>{`${post.title} | CholloTrip`}</title>
        <meta name="description" content={post.description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:url" content={canonical} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.description} />
              <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"Article","headline":post.title,"description":post.description,"datePublished":post.date,"dateModified":post.date,"mainEntityOfPage":canonical,"author":{"@type":"Organization","name":"CholloTrip","url":"https://www.chollotrip.com"},"publisher":{"@type":"Organization","name":"CholloTrip","url":"https://www.chollotrip.com"}})}</script>
      </Helmet>

      <article className="space-y-6">
        <p className="text-sm text-gray-500 mb-6">{post.date}</p>

        <div
          className="
            prose prose-lg max-w-none text-gray-800
            prose-p:leading-8
            prose-p:mb-6
            prose-ul:mb-6
            prose-ul:pl-6
            prose-li:mb-2
            prose-h1:text-4xl
            prose-h1:font-extrabold
            prose-h1:text-gray-900
            prose-h1:mb-8
            prose-h2:text-3xl
            prose-h2:font-bold
            prose-h2:text-orange-600
            prose-h2:mt-14
            prose-h2:mb-5
            prose-h3:text-2xl
            prose-h3:font-semibold
            prose-h3:text-gray-900
            prose-h3:mt-10
            prose-h3:mb-4
            prose-strong:text-gray-900
          "
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="mt-12 border-t pt-8">
          <h3 className="text-xl font-bold mb-4">Sigue explorando</h3>

          <ul className="space-y-2">
                <li><a href="/blog/escapada-budapest-vuelo-hotel" className="text-primary hover:underline">🗺️ Escapada barata a Budapest</a></li>
            <li><a href="/blog/vuelos-baratos-bruselas" className="text-primary hover:underline">✈️ Vuelos baratos a Bruselas</a></li>
            <li><a href="/blog/hoteles-baratos-budapest" className="text-primary hover:underline">🏨 Hoteles baratos en Budapest</a></li>
            <li><a href="/blog/vuelos-baratos-edimburgo" className="text-primary hover:underline">✈️ Vuelos baratos a Edimburgo</a></li>
            <li><a href="/blog/equipaje-mano-low-cost" className="text-primary hover:underline">🧳 Equipaje de mano en aerolíneas low cost</a></li>
            <li><a href="/blog/vuelos-baratos-dublin" className="text-primary hover:underline">✈️ Vuelos baratos a Dublín</a></li>
            <li><a href="/blog/hoteles-baratos-praga" className="text-primary hover:underline">🏨 Hoteles baratos en Praga</a></li>
            <li><a href="/blog/vuelos-baratos-viena" className="text-primary hover:underline">✈️ Vuelos baratos a Viena</a></li>
            <li><a href="/blog/escapada-paris-vuelo-hotel" className="text-primary hover:underline">🗺️ Escapada barata a París</a></li>
            <li><a href="/blog/vuelos-baratos-budapest" className="text-primary hover:underline">✈️ Vuelos baratos a Budapest</a></li>
            <li><a href="/blog/hoteles-baratos-londres" className="text-primary hover:underline">🏨 Hoteles baratos en Londres</a></li>
            <li><a href="/blog/vuelos-baratos-praga" className="text-primary hover:underline">✈️ Vuelos baratos a Praga</a></li>
            <li><a href="/blog/escapada-praga-vuelo-hotel" className="text-primary hover:underline">🗺️ Escapada barata a Praga</a></li>
            <li><a href="/blog/vuelos-baratos-milan" className="text-primary hover:underline">✈️ Vuelos baratos a Milán</a></li>
            <li><a href="/blog/hoteles-baratos-paris" className="text-primary hover:underline">🏨 Hoteles baratos en París</a></li>
            <li><a href="/blog/vuelos-baratos-londres" className="text-primary hover:underline">✈️ Vuelos baratos a Londres</a></li>
            <li><a href="/blog/vuelos-baratos-paris" className="text-primary hover:underline">✈️ Vuelos baratos a París</a></li>
            <li><a href="/blog/hoteles-baratos-oporto" className="text-primary hover:underline">🏨 Hoteles baratos en Oporto</a></li>
            <li><a href="/blog/escapadas-baratas-croacia" className="text-primary hover:underline">🇭🇷 Escapadas baratas a Croacia</a></li>
            <li><a href="/blog/vuelos-baratos-portugal" className="text-primary hover:underline">🇵🇹 Vuelos baratos a Portugal</a></li>
            <li><a href="/blog/hoteles-baratos-berlin" className="text-primary hover:underline">🏨 Hoteles baratos en Berlín</a></li>
            <li><a href="/blog/vuelos-baratos-amsterdam" className="text-primary hover:underline">🛫 Vuelos baratos a Ámsterdam</a></li>
            <li><a href="/blog/escapadas-baratas-grecia" className="text-primary hover:underline">🇬🇷 Escapadas baratas a Grecia</a></li>
            <li><a href="/blog/vuelos-baratos-ultima-hora" className="text-primary hover:underline">⏰ Vuelos baratos última hora</a></li>
            <li><a href="/blog/hoteles-baratos-barcelona" className="text-primary hover:underline">🏨 Hoteles baratos en Barcelona</a></li>
            <li><a href="/blog/vuelos-baratos-europa-2026" className="text-primary hover:underline">🛫 Vuelos baratos por Europa 2026</a></li>
            <li><a href="/blog/hoteles-baratos-madrid-2026" className="text-primary hover:underline">🏨 Hoteles baratos en Madrid 2026</a></li>
            <li><a href="/blog/escapadas-baratas-fin-de-semana" className="text-primary hover:underline">🗺️ Escapadas baratas de fin de semana</a></li>
            <li><a href="/blog/vuelos-baratos-madrid-roma" className="text-primary hover:underline">✈️ Vuelos baratos Madrid Roma</a></li>
            <li><a href="/blog/vuelos-baratos-roma-desde-espana" className="text-primary hover:underline">🇮🇹 Vuelos baratos a Roma desde España</a></li>
            <li><a href="/blog/mejores-destinos-baratos-europa-2026" className="text-primary hover:underline">🌍 Mejores destinos baratos en Europa 2026</a></li>
            <li><a href="/blog/hoteles-baratos-barcelona-centro" className="text-primary hover:underline">🏨 Hoteles baratos en Barcelona centro</a></li>
            <li><a href="/blog/viajes-baratos-ultima-hora" className="text-primary hover:underline">🔥 Viajes baratos última hora</a></li>
            <li><a href="/blog/vuelos-baratos-estudiantes-europa" className="text-primary hover:underline">🎒 Vuelos baratos estudiantes Europa</a></li>
          </ul>
        </div>
      </article>
    </main>
  );
}
