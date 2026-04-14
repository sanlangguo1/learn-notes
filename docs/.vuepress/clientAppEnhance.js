import { defineClientAppEnhance } from "@vuepress/client";
import mermaid from "mermaid";

export default defineClientAppEnhance(({ app, router }) => {
  if (typeof window !== "undefined") {
    const renderMermaid = async () => {
      // VuePress 2.x 中 mermaid 代码块的实际结构是:
      // <pre class="language-mermaid"><code>...</code></pre>
      const mermaidPreBlocks = document.querySelectorAll(
        "div.language-mermaid",
      );

      if (mermaidPreBlocks.length === 0) {
        return;
      }

      try {
        // 动态导入 Mermaid ESM 模块
        // 使用最新稳定版本 @10
        const mermaidModule =
          await import("https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs");
        const mermaid = mermaidModule.default;
        console.log("✅ Mermaid 库加载成功");

        // 配置 Mermaid
        mermaid.initialize({
          startOnLoad: false,
          theme: "default",
          securityLevel: "loose",
          logLevel: 3, // 详细日志
        });

        // 转换 pre.language-mermaid 为 div.mermaid
        mermaidPreBlocks.forEach((block) => {
          const code = block.querySelector("code");
          if (code) {
            const div = document.createElement("div");
            div.className = "mermaid";
            div.textContent = code.textContent.trim();
            block.parentNode.replaceChild(div, block);
          }
        });

        // 渲染所有 mermaid 图表
        await mermaid.run({
          querySelector: ".mermaid",
          suppressErrors: false,
        });
      } catch (error) {
        console.error("❌ Mermaid 加载或渲染失败:", error);
      }
    };

    // 在路由切换后渲染
    router.afterEach(() => {
      setTimeout(renderMermaid, 300);
    });

    // 初始渲染
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () => {
        setTimeout(renderMermaid, 1500);
      });
    } else {
      setTimeout(renderMermaid, 500);
    }
  }
});
