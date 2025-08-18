import Content from '@/content/rules.mdx';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'UNIHACK - Rules'
}

export default function Page() {
    return (
        <>
            <h1>Rules</h1>
            <Content />
        </>
    )
}