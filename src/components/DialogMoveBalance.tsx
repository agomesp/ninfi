import DialogModal from "@/components/DialogModal.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Label} from "@/components/ui/label.tsx";

interface IDialogMoveBalanceProps {
    trigger: any;
}

const DialogMoveBalance = ({trigger}: IDialogMoveBalanceProps) => {
    return (
        <DialogModal trigger={trigger} title="Insert movementation" description="Type in your movementation">
            <Label htmlFor="value" className="text-right">
                Value
            </Label>
            <Input
                id="value"
                placeholder="0.00"
                className="col-span-3"
            />
        </DialogModal>
    );
};

export default DialogMoveBalance;