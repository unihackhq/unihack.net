import Content from '@/content/terms.mdx';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'UNIHACK - Terms of Service'
}

export default function Page() {
    return (
        <>
            <h1>Terms of Service</h1>
            <Content />
        </>
    )
}