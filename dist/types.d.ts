import React$1, { MouseEventHandler, ReactNode, HTMLAttributes } from 'react';

interface ButtonProps {
    text?: string;
    primary?: boolean;
    disabled?: boolean;
    backgroundColor?: string;
    size?: "small" | "medium" | "large";
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

declare const Button: React$1.FC<ButtonProps>;

interface LabelProps {
    text?: string;
    disabled?: boolean;
    backgroundColor?: string;
    color?: string;
    size?: string;
    OnClick?: MouseEventHandler<HTMLLabelElement>;
}

declare const Label: React$1.FC<LabelProps>;

interface TextProps {
    size?: string;
    color?: string;
    bold?: boolean;
    disabled?: boolean;
    children?: React.ReactNode;
    backgroundColor?: string;
    onClick?: MouseEventHandler<HTMLElement>;
}

declare const Text: React$1.FC<TextProps>;

interface TableProps {
    children: ReactNode | ReactNode[];
    disabled?: boolean;
    color?: string;
    backgroundColor?: string;
    header1?: string;
    header2?: string;
    header3?: string;
    td1?: string;
    td2?: string;
    td3?: string;
    td4?: string;
    td5?: string;
    td6?: string;
    footer1?: string;
    footer2?: string;
    footer3?: string;
}

declare const Table: React$1.FC<TableProps>;

interface DropdownProps {
    options: string[];
    defaultValue?: string;
    disabled?: boolean;
    color?: string;
    backgroundColor?: string;
    onClick?: MouseEventHandler<HTMLOptionElement>;
}

declare const Dropdown: React$1.FC<DropdownProps>;

interface RadioButtonProps {
    id: string;
    value: string;
    label: string;
    checked?: boolean;
    disabled?: boolean;
    color?: string;
    backgroundColor?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

declare const RadioButton: React$1.FC<RadioButtonProps>;

interface ImgProps extends HTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    disabled?: boolean;
    backgroundColor?: string;
}

declare const Img: React$1.FC<ImgProps>;

interface HeroImageProps {
    src: string;
    alt?: string;
    disabled?: boolean;
    backgroundColor?: string;
}

declare const HeroImage: React$1.FC<HeroImageProps>;

interface CardProps {
    title?: string;
    content?: string;
    disabled?: boolean;
    backgroundColor?: string;
    color?: string;
}

declare const Card: React$1.FC<CardProps>;

export { Button, Card, Dropdown, HeroImage as HeroImg, Img, Label, RadioButton, Table, Text };
