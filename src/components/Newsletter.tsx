import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({ title: "¡Suscrito!", description: "Recibirás los mejores chollos en tu correo." });
      setEmail("");
    }
  };

  return (
    <section className="bg-primary py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-2 font-display text-3xl font-bold text-primary-foreground">
          No te pierdas ningún chollo
        </h2>
        <p className="mb-6 text-primary-foreground/80">
          Recibe las mejores ofertas directamente en tu correo.
        </p>
        <form
          onSubmit={handleSubmit}
          className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row"
        >
          <Input
            type="email"
            placeholder="tu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50 focus-visible:ring-primary-foreground/30"
          />
          <Button
            type="submit"
            variant="secondary"
            className="gap-2"
          >
            <Send className="h-4 w-4" />
            Suscribirse
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
