import { SharedStyles } from '@/exports/styles';
import Link from 'next/link';

export default function Button({ url, name }: ButtonProps) {
    return (
        <Link
            className={SharedStyles.Button}
            href={url}
        >
            {name}
        </Link>
    );
}
