<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Site is multi-page (/, /about, /domains, /ecosystem, /leadership, /contact) sharing SiteChrome in __root; the user asked for separate pages.
- Motion lives in src/components/site/motion.tsx using CSS + IntersectionObserver + canvas, no animation library; avoids extra client deps.
