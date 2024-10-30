import Image from 'next/image';

export default function Logo() {
    return (
        <Image
            src={'/logo.svg'}
            alt='Authy Logo'
            width={40}
            height={40}
        />
    );
}
