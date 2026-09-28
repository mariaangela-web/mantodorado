import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { products } from "@/data/products";

type Errors = Partial<Record<string, string>>;

const clientTypes = [
  "Cliente particular",
  "Restaurante / hotel / cafetería",
  "Tienda / minorista",
  "Distribuidor / mayorista",
  "Empresa",
  "Otro",
];

export function ContactForm({ defaultProduct }: { defaultProduct?: string }) {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const next: Errors = {};
    const name = String(form.get("nombre") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const phone = String(form.get("telefono") ?? "").trim();
    const message = String(form.get("mensaje") ?? "").trim();

    if (name.length < 3) next.nombre = "Ingresa tu nombre completo.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) next.email = "Ingresa un correo válido.";
    if (phone.replace(/\D/g, "").length < 6) next.telefono = "Ingresa un teléfono válido.";
    if (message.length < 10) next.mensaje = "Cuéntanos brevemente tu requerimiento.";

    setErrors(next);
    if (Object.keys(next).length > 0) return;

    // TODO: conectar con servicio de email / CRM / backend.
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-xl border border-border surface-cream p-10 text-center shadow-card">
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-full gradient-gold text-gold-foreground">
          <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
        </span>
        <h3 className="mt-5 text-xl text-primary">Consulta enviada</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Gracias por contactarnos. Hemos recibido tu consulta y nos comunicaremos contigo pronto.
        </p>
        <Button variant="outline" className="mt-6" onClick={() => setSent(false)}>
          Enviar otra consulta
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-xl border border-border bg-card p-6 shadow-card md:p-8"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Nombre completo" name="nombre" error={errors.nombre} required />
        <Field label="Empresa" name="empresa" placeholder="Opcional" />
        <Field label="Correo electrónico" name="email" type="email" error={errors.email} required />
        <Field label="Teléfono" name="telefono" type="tel" error={errors.telefono} required />
        <Field label="Ciudad" name="ciudad" />
        <div className="grid gap-2">
          <Label htmlFor="tipo">Tipo de cliente</Label>
          <select
            id="tipo"
            name="tipo"
            defaultValue={clientTypes[0]}
            className="h-10 rounded-md border border-input bg-background px-3 text-sm focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none"
          >
            {clientTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="producto">Producto de interés</Label>
          <select
            id="producto"
            name="producto"
            defaultValue={defaultProduct ?? products[0].slug}
            className="h-10 rounded-md border border-input bg-background px-3 text-sm focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none"
          >
            {products.map((product) => (
              <option key={product.slug} value={product.slug}>
                {product.name}
              </option>
            ))}
            <option value="otro">Otro / por definir</option>
          </select>
        </div>
        <Field label="Cantidad aproximada" name="cantidad" placeholder="Ej. 20 kg por semana" />
        <div className="md:col-span-2">
          <Field label="Asunto" name="asunto" placeholder="Ej. Cotización mayorista" />
        </div>
        <div className="grid gap-2 md:col-span-2">
          <Label htmlFor="mensaje">
            Mensaje <span className="text-destructive">*</span>
          </Label>
          <Textarea
            id="mensaje"
            name="mensaje"
            rows={5}
            aria-invalid={Boolean(errors.mensaje)}
            aria-describedby={errors.mensaje ? "mensaje-error" : undefined}
            placeholder="Cuéntanos qué necesitas: producto, volumen y ciudad de entrega."
          />
          {errors.mensaje ? (
            <p id="mensaje-error" className="text-xs text-destructive">
              {errors.mensaje}
            </p>
          ) : null}
        </div>
      </div>

      <Button type="submit" variant="gold" size="xl" className="mt-7 w-full sm:w-auto">
        Enviar consulta
      </Button>
      <p className="mt-4 text-xs text-muted-foreground">
        Al enviar este formulario aceptas nuestra política de privacidad.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={name}>
        {label} {required ? <span className="text-destructive">*</span> : null}
      </Label>
      <Input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
      />
      {error ? (
        <p id={`${name}-error`} className="text-xs text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}
