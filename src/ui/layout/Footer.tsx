import { LayoutStyles } from '@/exports/styles';

export default function Footer() {
    return (
        <footer className={LayoutStyles.Footer}>
            <p>© {new Date().getFullYear()} Verfy. All rights reserved.</p>
        </footer>
    );
}
