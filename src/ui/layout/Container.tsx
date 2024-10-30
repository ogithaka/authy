import { LayoutStyles } from '@/exports/styles';

export default function Container({ children }: ContainerProps) {
    return <div className={LayoutStyles.Container}>{children}</div>;
}
