import React from 'react';
import type { DropdownFooterProps } from '../DropdownFooter';
import './index.less';
export declare type FooterRender = ((onConfirm?: (e?: React.MouseEvent) => void, onClear?: (e?: React.MouseEvent) => void) => JSX.Element) | false;
export declare type DropdownProps = {
    label?: React.ReactNode;
    footer?: DropdownFooterProps;
    footerRender?: FooterRender;
    padding?: number;
    disabled?: boolean;
    onVisibleChange?: (visible: boolean) => void;
    visible?: boolean;
};
declare const FilterDropdown: React.FC<DropdownProps>;
export default FilterDropdown;
