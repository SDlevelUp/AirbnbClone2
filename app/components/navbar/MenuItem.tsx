'use client'

interface MenuItemProps {
    label: React.ReactNode;
    onclick: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({
    onclick,
    label
}) => {
    return (
        <div
            onClick={onclick}
            className="
            px-4
            py-3
            hover:bg-neutral-100
            transition
            font-semibold
        ">
            {label}
        </div>
    )
}
export default MenuItem;