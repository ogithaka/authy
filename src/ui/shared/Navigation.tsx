import { SharedStyles } from '@/exports/styles';

export default function Navigation({ children }: NavigationProps) {
    return (
        <nav className={SharedStyles.Navigation}>
            <div className={SharedStyles.NavigationLarge}>{children}</div>
            <div className={SharedStyles.NavigationSmall}>
                <div className={SharedStyles.NavigationSmallTrigger}></div>
                <div className={SharedStyles.NavigationSmallDropdown}>
                    {children}
                </div>
            </div>
        </nav>
    );
}
