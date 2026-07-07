// =============================================================================
// Configuração central do site — edite aqui os dados de contato e redes sociais.
// =============================================================================

export const BUSINESS_NAME = "Möble - Marcenaria Personalizada";
export const BUSINESS_SHORT_NAME = "Möble";

export const WHATSAPP_NUMBER = "5543988695503";

export const WHATSAPP_MESSAGE =
  "Olá! Gostaria de solicitar um orçamento de mobiliário planejado.";

export const CONTACT_EMAIL = "marcenariamoble@gmail.com";

export const CONTACT_PHONE = "(43) 98869-5503";

export const ADDRESS =
  "Av. das Indústrias, 920 - Parque Industrial, Cambira - PR, 86890-000";

export const CITY = "Cambira, PR";

export const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Av.+das+Indústrias,+920+-+Parque+Industrial,+Cambira+-+PR,+86890-000";

export const BUSINESS_HOURS = "Seg–Sex, 8h às 18h";

export const SOCIAL = {
  instagram: "https://www.instagram.com/marcenariamoble",
  linkedin: "",
  pinterest: "",
};

export const whatsappLink = () =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const telLink = () => `tel:+${WHATSAPP_NUMBER}`;

export const mailtoLink = () =>
  `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    "Solicitação de orçamento",
  )}`;
