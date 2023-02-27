import React from "react";

export default interface IButtonProps {
    click: React.MouseEventHandler<HTMLButtonElement>
    title: string
}