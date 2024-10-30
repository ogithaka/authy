import { SharedStyles } from '@/exports/styles';

export default function Navigation({ children }: NavigationProps) {
    return (
        <nav className={SharedStyles.Navigation}>
            <div className={SharedStyles.NavigationFull}>{children}</div>
            <div className={SharedStyles.NavigationSmall}>
                <div className={SharedStyles.NavigationSmallTrigger}></div>
                <div className={SharedStyles.NavigationDropdown}>
                    {children}
                </div>
            </div>
        </nav>
    );
}
