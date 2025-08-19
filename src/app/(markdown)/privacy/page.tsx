import Content from '@/content/privacy-policy.mdx';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'UNIHACK - Privacy Policy'
}

export default function Page() {
    return (
        <>
            <h1>Privacy Policy</h1>
            <Content />
        </>
    )
}