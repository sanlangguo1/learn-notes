<template><div><h3 id="https-有哪些漏洞" tabindex="-1"><a class="header-anchor" href="#https-有哪些漏洞" aria-hidden="true">#</a> https 有哪些漏洞</h3>
<p>HTTPS 协议本身是比较安全的，但仍然存在一些漏洞，例如：</p>
<ol>
<li>
<p>中间人攻击：攻击者可以在用户和服务器之间插入自己的服务器，窃取用户数据。</p>
</li>
<li>
<p>SSL/TLS 漏洞：SSL/TLS 协议本身也可能存在漏洞，攻击者可以利用这些漏洞来窃取数据或进行其他恶意行为。</p>
</li>
<li>
<p>证书伪造：攻击者可以伪造 SSL 证书，使用户认为自己正在与合法网站通信，从而窃取用户数据。</p>
</li>
<li>
<p>不安全的密码：如果用户在 HTTPS 连接中使用弱密码，那么攻击者可以通过暴力破解或其他手段轻松地获取密码。</p>
</li>
</ol>
<p>为了保护用户数据的安全性，我们应该采取多种安全措施，包括使用强密码、更新软件、避免使用公共 WiFi 等。</p>
<h3 id="http-2-和-http-3-的区别" tabindex="-1"><a class="header-anchor" href="#http-2-和-http-3-的区别" aria-hidden="true">#</a> HTTP/2 和 HTTP/3 的区别</h3>
<table>
<thead>
<tr>
<th>特性</th>
<th>HTTP/1.1</th>
<th>HTTP/2</th>
<th>HTTP/3</th>
</tr>
</thead>
<tbody>
<tr>
<td>传输层协议</td>
<td>TCP</td>
<td>TCP</td>
<td><strong>QUIC (UDP)</strong></td>
</tr>
<tr>
<td>并发请求</td>
<td>多 TCP 连接</td>
<td>单连接多路复用</td>
<td>单连接多路复用</td>
</tr>
<tr>
<td>队头阻塞</td>
<td>应用层阻塞</td>
<td>TCP 层阻塞</td>
<td>✅ 无队头阻塞</td>
</tr>
<tr>
<td>连接复用</td>
<td>部分</td>
<td>完全</td>
<td>完全</td>
</tr>
<tr>
<td>头部压缩</td>
<td>无</td>
<td>HPACK</td>
<td>QPACK</td>
</tr>
<tr>
<td>加密</td>
<td>可选 TLS</td>
<td>可选 TLS</td>
<td>默认 TLS 1.3</td>
</tr>
<tr>
<td>握手延迟</td>
<td>多次 RTT</td>
<td>较少</td>
<td>✅ 0-RTT</td>
</tr>
<tr>
<td>连接迁移</td>
<td>❌</td>
<td>❌</td>
<td>✅ 支持</td>
</tr>
<tr>
<td>服务端推送</td>
<td>无</td>
<td>有（已弃用趋势）</td>
<td>弃用</td>
</tr>
<tr>
<td>浏览器支持</td>
<td>全部</td>
<td>全部</td>
<td>Chrome / Safari / Edge / Firefox 均支持</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th>版本</th>
<th>核心理念</th>
<th>解决问题</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>HTTP/1.1</strong></td>
<td>连接复用（Keep-Alive）</td>
<td>减少握手开销，但有队头阻塞</td>
</tr>
<tr>
<td><strong>HTTP/2</strong></td>
<td>多路复用 + 二进制帧</td>
<td>消除应用层阻塞，但仍受 TCP 影响</td>
</tr>
<tr>
<td><strong>HTTP/3</strong></td>
<td>基于 QUIC 的传输</td>
<td>消除 TCP 阻塞 + 降低延迟 + 连接迁移</td>
</tr>
</tbody>
</table>
</div></template>


