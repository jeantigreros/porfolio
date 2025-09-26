export const PROJECTS = [
  {
    slug: "tvbox-server",
    title: "Monté mi propia nube en casa",
    hidden: false,
    description:
      "Modifiqué y compilé una imagen personalizada de Armbian para que funcionara en una TVBOX DQ08, con la finalidad de que sirviera como un servidor con linux disponible en mi red local.",
    tech: [
      "Linux",
      "Docker",
      "Hardware",
    ],
    link: "https://gist.github.com/jeantigreros/71accf8e4a8602bc5a904d62e339d53a",
    demo: false,
    code: false,
  },

  {
    slug: "web-server-for-pos-printer",
    title: "Aplicación para permitir impresión desde un servicio externo",
    hidden: false,
    description:
      "Hice un servidor web que toma el XML que da ODOO lo transforma en una imagen, lee la imagen, y manda comandos ESC/POS a la impresora para imprimir.",
    tech: [
      "Flask",
      "Web Server",
      "Serial Ports",
    ],
    link: "https://github.com/jeantigreros/python-odoo-script",
    demo: false,
    code: true,
  },
]
