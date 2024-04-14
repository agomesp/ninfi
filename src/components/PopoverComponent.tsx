import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover.tsx";
import React from "react";

interface IPopoverComponentProps {
    trigger: any;
    children: React.ReactNode;
    width?: string;
}

const PopoverComponent = ({trigger, children, width = '80'}: IPopoverComponentProps) => {
    return (
        <Popover>
            <PopoverTrigger asChild>
                {trigger}
            </PopoverTrigger>

            <PopoverContent className={`w-${width}`}>
                {children}
            </PopoverContent>
        </Popover>
    );
};

export default PopoverComponent;