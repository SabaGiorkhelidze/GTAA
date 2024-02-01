import { AnchorHTMLAttributes, ReactNode } from "react";

export type NavbarContainerPropTypes = {
  children: ReactNode;
};

export type NavbarMenuLinksPropTypes = {
  isOpen: Boolean;
};

export type MenuItemPropTypes = {
  children: ReactNode;
  isLast?: Boolean;
  to?: string;
  linkProps?: AnchorHTMLAttributes<HTMLAnchorElement>;
};

export type MenuTogglePropTypes = {
  toggle: () => void;
  isOpen: Boolean;
};


