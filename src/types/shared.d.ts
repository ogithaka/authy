import { ReactNode } from 'react';

declare global {
    interface NavigationItemProps {
        url: string;
        name: string;
        active: boolean;
    }
    interface NavigationProps {
        children: ReactNode;
    }
    interface ButtonProps {
        url: string;
        name: string;
    }
}

export {};
