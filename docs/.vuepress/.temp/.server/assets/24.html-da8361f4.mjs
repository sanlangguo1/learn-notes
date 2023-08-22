import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.696937cd.mjs";
import "@vuepress/shared";
import "ts-debounce";
import "vue-router";
import "@vueuse/core";
import "vuepress-shared/client";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="_24-分层和合成机制-为什么css动画比javascript高效" tabindex="-1"><a class="header-anchor" href="#_24-分层和合成机制-为什么css动画比javascript高效" aria-hidden="true">#</a> 24-分层和合成机制：为什么CSS动画比JavaScript高效？</h2><p>在这篇文章中，我们将继续沿着渲染流水线向下分析，来聊聊DOM树之后所发生的事情。我们主要讲解渲染引擎的分层和合成机制，因为分层和合成机制代表了浏览器最为先进的合成技术。了解其工作原理，有助于拓宽你的视野，而且也有助于你更加深刻地理解CSS动画和JavaScript底层工作机制。</p><h3 id="显示器是怎么显示图像的" tabindex="-1"><a class="header-anchor" href="#显示器是怎么显示图像的" aria-hidden="true">#</a> 显示器是怎么显示图像的</h3><p>每个显示器都有固定的刷新频率，通常是60HZ，也就是每秒更新60张图片，更新的图片都来自于显卡中一个叫前缓冲区的地方，显示器所做的任务很简单，就是每秒固定读取60次前缓冲区中的图像，并将读取的图像显示到显示器上。</p><p>显卡的职责就是合成新的图像，并将图像保存到后缓冲区中，一旦显卡把合成的图像写到后缓冲区，系统就会让后缓冲区和前缓冲区互换，这样就能保证显示器能读取到最新显卡合成的图像。通常情况下，显卡的更新频率和显示器的刷新频率是一致的。但有时候，在一些复杂的场景中，显卡处理一张图片的速度会变慢，这样就会造成视觉上的卡顿。</p><h3 id="帧-vs-帧率" tabindex="-1"><a class="header-anchor" href="#帧-vs-帧率" aria-hidden="true">#</a> 帧 VS 帧率</h3><p>帧和帧率是后续一切分析的基础。当你通过滚动条滚动页面，或者通过手势缩放页面时，浏览器会不断地生成新的帧。帧是一张静态图片，由多个层组成。帧率指的是每秒钟渲染多少帧。通常情况下，帧率是60FPS，也就是每秒钟渲染60张静态图片。</p><h3 id="分层" tabindex="-1"><a class="header-anchor" href="#分层" aria-hidden="true">#</a> 分层</h3><p>在渲染过程中，浏览器会将每个层分别绘制到一个独立的、与其他层无关的位图中，这个位图称为绘图层。这个过程被称为分层。分层有助于提高渲染性能。浏览器可以通过对每个层进行单独处理来提高性能。当一个层需要重绘时，只有该层需要重新绘制。其他层不受影响。</p><h3 id="合成" tabindex="-1"><a class="header-anchor" href="#合成" aria-hidden="true">#</a> 合成</h3><p>在分层之后，浏览器需要将这些层合成为一张完整的图片，并将其显示在屏幕上。这个过程称为合成。合成是一个非常重要的过程，因为它直接影响到页面性能。如果合成过程不够快，就会导致页面出现卡顿现象。</p><h3 id="css动画比javascript高效" tabindex="-1"><a class="header-anchor" href="#css动画比javascript高效" aria-hidden="true">#</a> CSS动画比JavaScript高效</h3><p>在分层和合成机制中，CSS动画比JavaScript动画更高效。这是因为CSS动画可以利用分层和合成机制来提高性能。当使用CSS动画时，浏览器会自动将元素分层，并将动画效果应用于该层。这样可以避免JavaScript动画中每一帧都需要重新计算元素位置和属性值的问题。</p><p>总之，了解分层和合成机制对于优化页面性能非常重要。通过使用CSS动画等技术，可以利用分层和合成机制来提高页面性能。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/browser/24.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _24_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "24.html.vue"]]);
export {
  _24_html as default
};
