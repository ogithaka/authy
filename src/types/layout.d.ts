import { ReactNode } from 'react';

declare global {
    interface ContainerProps {
        children?: ReactNode;
    }
    interface HeaderProps {
        children?: ReactNode;
    }
    interface MainProps {
        children?: ReactNode;
    }
}

export {};
