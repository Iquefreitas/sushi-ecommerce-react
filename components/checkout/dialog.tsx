"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";
import { StepUser } from "@/components/checkout/step-user";
import { StepAddress } from "@/components/checkout/step-address";
import { StepFinish } from "@/components/checkout/step-finish";
import { CheckoutSteps } from "@/components/types/checkout-steps";



type Props = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export const CheckoutDialog = ({ open, onOpenChange }: Props) => {
    const [step, setStep] = useState<CheckoutSteps>('user');

    let progressPct = 0;
    switch (step) {
        case 'user':
            progressPct = 30;
            break;
        case 'address':
            progressPct = 70;
            break;
        case 'finish':
            progressPct = 100;
            break;
    }

    return (

        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        {step === 'user' && 'Dados Pessoais'}
                        {step === 'address' && 'Endereço de entrega'}
                        {step === 'finish' && 'Envio para o WhatsApp'}
                    </DialogTitle>
                </DialogHeader>

                <Progress value={66} />

                <div className="flex flex-col gap-3">
                    {step === 'user' && <StepUser setStep={setStep}/>}
                    {step === 'address' && <StepAddress setStep={setStep}/>}
                    {step === 'finish' && <StepFinish/>}

                </div>
            </DialogContent>
        </Dialog>
    );
}