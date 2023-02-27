import React from "react";

export default interface IModalProps {
    children: React.ReactNode
    close: React.MouseEventHandler<HTMLElement>
}