import { Link } from "react-router-dom";
import { blogPosts } from "@/content/blog";

export default function Blog() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-10">
      <div>
        <h1 className="text-4xl font-bold mb-4">Blog de viajes baratos</h1>
        <p className="text-lg text-muted-foreground">
          Guías reales para encontrar vuelos baratos, hoteles económicos y viajar gastando menos.
        </p>
      </div>

      <div className="space-y-8">
        {blogPosts.map((post) => (
          <article key={post.slug} className="border-b pb-6">
            <h2 className="text-2xl font-semibold mb-2">
              <Link
                to={`/blog/${post.slug}`}
                className="hover:text-orange-500"
              >
                {post.title}
              </Link>
            </h2>

            <p className="text-muted-foreground mb-3">
              {post.description}
            </p>

            <Link
              to={`/blog/${post.slug}`}
              className="text-orange-500 font-medium hover:underline"
            >
              Leer artículo →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}