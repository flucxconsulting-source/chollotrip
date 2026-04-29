export default function Privacy() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-10 space-y-6 text-gray-800 leading-7">
      <h1 className="text-3xl font-bold">Política de privacidad</h1>

      <p className="text-sm text-gray-500">
        Última actualización: 29 de abril de 2026
      </p>

      <h2 className="text-2xl font-bold mt-8">1. Responsable del tratamiento</h2>
      <p>
        El responsable del tratamiento de los datos recogidos a través de
        chollotrip.com es el titular del sitio web. Para cualquier consulta
        relacionada con esta política de privacidad o con tus datos
        personales, puedes escribir a{" "}
        <a
          href="mailto:kikesanzsanzkike@gmail.com"
          className="text-primary hover:underline"
        >
          kikesanzsanzkike@gmail.com
        </a>
        .
      </p>

      <h2 className="text-2xl font-bold mt-8">2. Datos que recogemos</h2>
      <p>
        CholloTrip no requiere registro para navegar. Sin embargo, durante tu
        visita podemos recoger de forma automática:
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Dirección IP y datos técnicos del dispositivo y navegador.</li>
        <li>Páginas visitadas, tiempo de permanencia y origen del tráfico.</li>
        <li>
          Identificadores almacenados en cookies propias y de terceros (ver
          sección 4).
        </li>
        <li>
          En caso de que decidas suscribirte a una newsletter o contactarnos:
          la dirección de correo electrónico que nos proporciones.
        </li>
      </ul>

      <h2 className="text-2xl font-bold mt-8">3. Finalidades y base legal</h2>
      <p>Tratamos esos datos para las siguientes finalidades:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          Mantener el sitio operativo, seguro y mejorar su rendimiento (interés
          legítimo).
        </li>
        <li>
          Analizar el comportamiento de los usuarios de forma agregada para
          optimizar el contenido (consentimiento mediante cookies analíticas).
        </li>
        <li>
          Mostrar publicidad personalizada o no personalizada a través de
          Google AdSense (consentimiento mediante cookies publicitarias).
        </li>
        <li>
          Atender comunicaciones que nos envíes voluntariamente (ejecución de
          una solicitud).
        </li>
      </ul>

      <h2 className="text-2xl font-bold mt-8">
        4. Cookies y tecnologías similares
      </h2>
      <p>
        Esta web utiliza cookies propias y de terceros. Puedes consultar el
        detalle, gestionar preferencias y aprender a desactivarlas en nuestra{" "}
        <a href="/cookies" className="text-primary hover:underline">
          Política de cookies
        </a>
        .
      </p>

      <h2 className="text-2xl font-bold mt-8">5. Terceros y publicidad</h2>
      <p>
        CholloTrip se financia con publicidad gestionada por{" "}
        <strong>Google AdSense</strong>. Google y sus partners pueden utilizar
        cookies para servir anuncios basados en tus visitas previas a este y
        otros sitios web. Puedes inhabilitar la publicidad personalizada en{" "}
        <a
          href="https://adssettings.google.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          Configuración de anuncios de Google
        </a>
        , o consultar la lista de proveedores certificados en{" "}
        <a
          href="https://support.google.com/admanager/answer/9012903"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          el listado oficial de Google
        </a>
        .
      </p>
      <p>
        Adicionalmente podemos utilizar herramientas de medición de audiencia
        (por ejemplo, Google Analytics) y enlaces de afiliación que pueden
        recoger información sobre tu visita.
      </p>

      <h2 className="text-2xl font-bold mt-8">
        6. Transferencias internacionales
      </h2>
      <p>
        Algunos de los terceros mencionados (Google, entre otros) están
        radicados fuera del Espacio Económico Europeo. En esos casos, el
        prestador aplica garantías reconocidas por la Comisión Europea, como
        las cláusulas contractuales tipo o el marco Data Privacy Framework.
      </p>

      <h2 className="text-2xl font-bold mt-8">7. Plazo de conservación</h2>
      <p>
        Los datos recogidos automáticamente se conservan durante un máximo de
        26 meses. Los correos electrónicos enviados voluntariamente se
        conservan mientras dure la relación con el usuario y, posteriormente,
        durante el plazo legalmente exigible.
      </p>

      <h2 className="text-2xl font-bold mt-8">8. Tus derechos</h2>
      <p>
        Como usuario tienes derecho a acceder, rectificar y suprimir tus datos,
        oponerte al tratamiento, solicitar la limitación del mismo y a la
        portabilidad de tus datos. Puedes ejercer estos derechos enviando un
        correo a{" "}
        <a
          href="mailto:kikesanzsanzkike@gmail.com"
          className="text-primary hover:underline"
        >
          kikesanzsanzkike@gmail.com
        </a>
        . También tienes derecho a presentar una reclamación ante la Agencia
        Española de Protección de Datos (
        <a
          href="https://www.aepd.es/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          aepd.es
        </a>
        ).
      </p>

      <h2 className="text-2xl font-bold mt-8">9. Cambios en la política</h2>
      <p>
        Esta política puede actualizarse para reflejar cambios legales o
        funcionales. La fecha de la última actualización aparece al inicio de
        este documento.
      </p>
    </main>
  );
}
