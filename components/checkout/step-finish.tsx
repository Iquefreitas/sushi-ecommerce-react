import { useCheckoutStore } from "@/components/stores/checkout-store";
import { Button } from "@/components/ui/button";
import { generateMessage } from "@/lib/generate-message";
import Link from "next/link";



export const StepFinish = () => {
    const { name } = useCheckoutStore(state => state);

    const phoneNumber = process.env.NEXT_PUBLIC_ZAP;
if (!phoneNumber) {
    throw new Error("Número de WhatsApp não definido!");
}


    const message = generateMessage();
    //const linkZap = `https://api.whatsapp.com/${process.env.NEXT_PUBLIC_ZAP}?text=${encodeURI(message)}`;
    const linkZap = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;


    return (
        <div className="text-center flex flex-col gap-5">
            <p>Perfeito <strong>{name}</strong>!!</p>
            <p> Agora seu pedido será enviado para WhatsApp, continuaremos por lá...</p>
            <Button>
                <Link target="_blank" href={linkZap}>Enviar para o WhatsApp</Link>
            </Button>
        </div>
    );
}