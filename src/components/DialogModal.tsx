import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog.tsx";
import React from "react";

interface IDialogModalProps {
    trigger: any;
    maxWidth?: string;
    title: string;
    description?: string;
    children: React.ReactNode;
}

const DialogModal = ({trigger, maxWidth = '425', title, description, children}: IDialogModalProps) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                {trigger}
            </DialogTrigger>

            <DialogContent className={`sm:max-w-[${maxWidth}px]`}>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>
                        {description}
                    </DialogDescription>
                </DialogHeader>
                {children}
            </DialogContent>
        </Dialog>
    );
};

export default DialogModal;