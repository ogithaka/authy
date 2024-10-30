import { ReactNode } from 'react';

declare global {
    interface NavigationItemProps {
        url: string;
        name: string;
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
