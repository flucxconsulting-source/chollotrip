import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { blogPosts } from "@/content/blog";

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((item) => item.slug === slug);

  useEffect(() => {
    if (!post) return;

    document.title = `${post.title} | CholloTrip`;

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", post.description);
  }, [post]);

  if (!post) {
    return (
      <main className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Artículo no encontrado</h1>
        <p>El contenido que buscas no existe.</p>
      </main>
    );
  }

  return (
    <main className="max-w-3xl mx-auto px-6 py-10">
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
            <li>
              <a
                href="/blog/vuelos-baratos-madrid-roma"
                className="text-primary hover:underline"
              >
                ✈️ Vuelos baratos Madrid Roma
              </a>
            </li>
            <li>
              <a
                href="/blog/hoteles-baratos-barcelona-centro"
                className="text-primary hover:underline"
              >
                🏨 Hoteles baratos en Barcelona centro
              </a>
            </li>
            <li>
              <a
                href="/blog/viajes-baratos-ultima-hora"
                className="text-primary hover:underline"
              >
                🔥 Viajes baratos última hora
              </a>
            </li>
            <li>
              <a
                href="/blog/vuelos-baratos-estudiantes-europa"
                className="text-primary hover:underline"
              >
                🎒 Vuelos baratos estudiantes Europa
              </a>
            </li>
          </ul>
        </div>
      </article>
    </main>
  );
}