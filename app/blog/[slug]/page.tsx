import ArticleContent from "@/components/article/article-content";
import ArticleFooter from "@/components/article/article-footer";
import ArticleHeader from "@/components/article/article-header";
import ArticleSidebar from "@/components/article/article-sidebar";

export default function BlogPage() {
  return (
    <main className="bg-background">
      <div className="mx-auto flex max-w-7xl gap-10 px-6 py-12">
        {/* Share Buttons */}
        <aside className="hidden lg:block">
          <ArticleSidebar />
        </aside>

        {/* Content */}
        <article className="mx-auto max-w-3xl flex-1">
          <ArticleHeader />

          <ArticleContent />

          <ArticleFooter />
        </article>
      </div>
    </main>
  );
}