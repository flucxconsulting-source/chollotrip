export default function Cookies() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-10 space-y-6 text-gray-800 leading-7">
      <h1 className="text-3xl font-bold">Política de cookies</h1>

      <p className="text-sm text-gray-500">
        Última actualización: 29 de abril de 2026
      </p>

      <h2 className="text-2xl font-bold mt-8">¿Qué son las cookies?</h2>
      <p>
        Las cookies son pequeños archivos de texto que un sitio web guarda en
        tu navegador cuando lo visitas. Sirven para que la página funcione
        correctamente, recordar preferencias y, en algunos casos, mostrar
        publicidad relevante o medir el uso del sitio.
      </p>

      <h2 className="text-2xl font-bold mt-8">Cookies que utilizamos</h2>

      <h3 className="text-xl font-semibold mt-6">Cookies técnicas</h3>
      <p>
        Necesarias para el funcionamiento básico del sitio. No requieren
        consentimiento.
      </p>

      <h3 className="text-xl font-semibold mt-6">Cookies analíticas</h3>
      <p>
        Nos permiten conocer cómo se utiliza la web (páginas visitadas, tiempo
        en cada sección, dispositivo, etc.) de forma agregada y anónima. Solo
        se activan si das tu consentimiento.
      </p>

      <h3 className="text-xl font-semibold mt-6">
        Cookies publicitarias (Google AdSense)
      </h3>
      <p>
        CholloTrip utiliza <strong>Google AdSense</strong> para mostrar
        anuncios. Google y sus partners pueden colocar cookies de terceros en
        tu navegador para mostrar anuncios basados en tus visitas previas a
        este y otros sitios. Cuando no se otorga consentimiento para
        publicidad personalizada, se sirven anuncios no personalizados, que
        siguen utilizando cookies básicas para limitar la frecuencia, prevenir
        el fraude y agregar estadísticas.
      </p>
      <p>
        Puedes consultar la lista actualizada de proveedores de tecnología
        publicitaria de Google en su{" "}
        <a
          href="https://support.google.com/admanager/answer/9012903"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          listado oficial
        </a>{" "}
        y revisar la política de privacidad de Google en{" "}
        <a
          href="https://policies.google.com/technologies/ads"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          policies.google.com/technologies/ads
        </a>
        .
      </p>

      <h2 className="text-2xl font-bold mt-8">Cómo gestionar las cookies</h2>
      <p>
        Cuando entres a la web por primera vez desde la Unión Europea, te
        mostraremos un mensaje para aceptar, rechazar o personalizar las
        cookies no técnicas. Puedes cambiar tu elección en cualquier momento
        borrando las cookies del navegador y recargando la página.
      </p>
      <p>
        Adicionalmente, puedes inhabilitar la publicidad personalizada de
        Google desde{" "}
        <a
          href="https://adssettings.google.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          Configuración de anuncios de Google
        </a>
        .
      </p>

      <h2 className="text-2xl font-bold mt-8">
        Desactivar cookies en tu navegador
      </h2>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          <a
            href="https://support.google.com/chrome/answer/95647"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Google Chrome
          </a>
        </li>
        <li>
          <a
            href="https://support.mozilla.org/kb/Borrar%20cookies"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Mozilla Firefox
          </a>
        </li>
        <li>
          <a
            href="https://support.apple.com/es-es/guide/safari/sfri11471/mac"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Safari
          </a>
        </li>
        <li>
          <a
            href="https://support.microsoft.com/es-es/microsoft-edge"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Microsoft Edge
          </a>
        </li>
      </ul>

      <h2 className="text-2xl font-bold mt-8">Contacto</h2>
      <p>
        Para cualquier duda sobre el uso de cookies en CholloTrip, escríbenos
        a{" "}
        <a
          href="mailto:kikesanzsanzkike@gmail.com"
          className="text-primary hover:underline"
        >
          kikesanzsanzkike@gmail.com
        </a>
        .
      </p>
    </main>
  );
}
