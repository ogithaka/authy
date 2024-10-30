import Link from 'next/link';

export default function Button({ url, name }: ButtonProps) {
    return <Link href={url}>{name}</Link>;
}
