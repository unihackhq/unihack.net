import { Header } from "@/components/header";
import { MarkdownContent } from "@/components/markdown-content";

export default function MarkdownPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header isPage={true} />
      <MarkdownContent>
        {children}
      </MarkdownContent>
    </>
  );
}
