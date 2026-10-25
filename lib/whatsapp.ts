const NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "2349075281203";

export function whatsappLink(message: string): string {
  return `https://wa.me/${NUMBER}?text=${encodeURIComponent(message)}`;
}

export const waMessages = {
    consultation: "Hello Ageless Noir, I would like to book a consultation.",
    stylist: "Hello Ageless Noir, I would like to speak with a lead stylist.",
    dossier: "Hello Ageless Noir, please send me the full portfolio dossier.",
    general: "Hello Ageless Noir, I have an enquiry.",
    connect: (brand: string) => `Hello Ageless Noir, I would like to connect with ${brand}.`,
    order: (product: string, price: string) =>
        `Hello Ageless Noir, I would like to order ${product} (${price}).`,
    viewing: (property: string) =>
        `Hello Ageless Noir, I would like to schedule a viewing for ${property}.`,
};