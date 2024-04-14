import PopoverComponent from "@/components/PopoverComponent.tsx";
import {Label} from "@/components/ui/label.tsx";
import {Input} from "@/components/ui/input.tsx";

interface IPopoverMoveBalanceProps {
    trigger: any;
}

const PopoverMoveBalance = ({trigger}: IPopoverMoveBalanceProps) => {
    return (
        <PopoverComponent trigger={trigger}>
            <div className="grid gap-4 bg-white">
                <Label htmlFor="value" className="text-right">
                    Value
                </Label>
                <Input
                    id="value"
                    placeholder="0.00"
                    className="col-span-3"
                />
            </div>
        </PopoverComponent>
    );
};

export default PopoverMoveBalance;