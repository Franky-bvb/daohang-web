document.addEventListener('DOMContentLoaded', () => {
    // 定义包含所有书签分类和网站的数据结构
    const bookmarksData = [
        {
            id: 'ai',
            name: 'AI',
            icon: 'fas fa-robot',
            sites: [
                { name: 'ChatGPT', url: 'https://chatgpt.com/', icon: 'fas fa-comments' },
                { name: 'DeepSeek', url: 'https://chat.deepseek.com/', icon: 'fas fa-brain' },
                { name: 'Kimi.ai', url: 'https://kimi.moonshot.cn/', icon: 'fas fa-lightbulb' },
                { name: '豆包', url: 'https://www.doubao.com/chat/', icon: 'fas fa-comment-dots' },
                { name: '智谱清言', url: 'https://chatglm.cn/', icon: 'fas fa-comment-alt' },
                { name: '秘塔AI搜索', url: 'https://metaso.cn/', icon: 'fas fa-search' },
                { name: 'LiblibAI', url: 'https://www.liblib.art/', icon: 'fas fa-paint-brush' },
                { name: '可灵大模型', url: 'https://kling.kuaishou.com/', icon: 'fas fa-user-astronaut' },
                { name: '即梦AI', url: 'https://jimeng.jianying.com/ai-tool/home/', icon: 'fas fa-film' },
                { name: 'SiliconCloud', url: 'https://cloud.siliconflow.cn/models', icon: 'fas fa-cloud' },
                { name: '扣子', url: 'https://www.coze.cn/space/7476110994276614156/develop', icon: 'fas fa-puzzle-piece' },
                { name: 'Markmap', url: 'https://markmap.js.org/repl', icon: 'fas fa-sitemap' }
            ]
        },
        {
            id: 'design',
            name: '设计与创作',
            icon: 'fas fa-palette',
            sites: [
                { name: 'Canva可画', url: 'https://www.canva.cn/', icon: 'fas fa-paint-brush' },
                { name: '火山引擎大模型实验室', url: 'https://www.volcengine.com/product/ai-app-lab', icon: 'fas fa-lab' },
                { name: '火山方舟', url: 'https://www.volcengine.com/experience/ark', icon: 'fas fa-rocket' }
            ]
        },
        {
            id: 'game',
            name: '网页游戏',
            icon: 'fas fa-gamepad',
            sites: [
                { name: 'Kongregate', url: 'https://www.kongregate.com/', icon: 'fas fa-gamepad' },
                { name: 'CrazyGames', url: 'https://www.crazygames.com/', icon: 'fas fa-dice' },
                { name: 'HTML5 Games', url: 'https://html5games.com/', icon: 'fab fa-html5' },
                { name: 'Kano网站', url: 'https://www.kano.ca/', icon: 'fas fa-smile' },
                { name: 'Poki', url: 'https://poki.com/zh', icon: 'fas fa-gamepad' },
                { name: 'Online Games.io', url: 'https://www.onlinegames.io/', icon: 'fas fa-gamepad' },
                { name: 'Miniclip', url: 'https://www.miniclip.com/', icon: 'fas fa-play-circle' },
                { name: 'Game Source Finder', url: 'https://gamesource-finder.online/', icon: 'fas fa-search' },
                { name: '游戏资源下载工具', url: 'https://downloads.ink/', icon: 'fas fa-download' }
            ]
        },
        {
            id: 'seo',
            name: '收集需求和关键词分析',
            icon: 'fas fa-search',
            sites: [
                { name: 'Ahrefs Free SEO Tools', url: 'https://ahrefs.com/free-seo-tools', icon: 'fas fa-tools' },
                { name: 'Semrush', url: 'https://www.semrush.com/', icon: 'fas fa-chart-line' },
                { name: 'Google 趋势', url: 'https://trends.google.com/trends/', icon: 'fab fa-google' },
                { name: 'AITDK', url: 'https://aitdk.com/', icon: 'fas fa-chart-bar' },
                { name: '谷歌下拉词', url: 'https://www.searchsuggest.tips/?keyword=', icon: 'fas fa-list' },
                { name: 'Top AI -Toolify', url: 'https://www.toolify.ai/Best-AI-Tools-revenue', icon: 'fas fa-crown' },
                { name: 'AI Tool Requests', url: 'https://theresanaiforthat.com/requests', icon: 'fas fa-bullhorn' },
                { name: 'Keyword Difficulty Checker', url: 'https://ahrefs.com/keyword-difficulty', icon: 'fas fa-mountain' },
                { name: 'Similarweb', url: 'https://www.similarweb.com/', icon: 'fas fa-globe' }
            ]
        },
        {
            id: 'domains',
            name: '域名相关',
            icon: 'fas fa-globe-americas',
            sites: [
                { name: 'Instant Domain Search', url: 'https://instantdomainsearch.com/', icon: 'fas fa-search' },
                { name: 'Lean Domain Search', url: 'https://leandomainsearch.com/', icon: 'fas fa-search-plus' },
                { name: 'Query.Domains', url: 'https://query.domains/', icon: 'fas fa-list-alt' },
                { name: 'Spaceship', url: 'https://www.spaceship.com/zh/', icon: 'fas fa-rocket' },
                { name: '域名比价', url: 'https://tld-list.com/', icon: 'fas fa-tags' },
                { name: 'Porkbun', url: 'https://porkbun.com/', icon: 'fas fa-shopping-cart' },
                { name: 'Namecheap', url: 'https://www.namecheap.com/', icon: 'fas fa-shopping-basket' }
            ]
        },
        {
            id: 'hosting',
            name: '代码和网站托管',
            icon: 'fas fa-server',
            sites: [
                { name: 'Cloudflare', url: 'https://dash.cloudflare.com/login', icon: 'fas fa-cloud' },
                { name: 'GitHub', url: 'https://github.com/', icon: 'fab fa-github' },
                { name: 'Vercel', url: 'https://vercel.com/', icon: 'fas fa-bolt' }
            ]
        },
        {
            id: 'analytics',
            name: '数据统计后台',
            icon: 'fas fa-chart-line',
            sites: [
                { name: 'Google Analytics', url: 'https://analytics.google.com/', icon: 'fab fa-google' },
                { name: 'Google Search Console', url: 'https://search.google.com/search-console', icon: 'fab fa-google' },
                { name: '站长工具网站测速', url: 'https://ping.chinaz.com/', icon: 'fas fa-tachometer-alt' },
                { name: 'Bing Webmaster Tools', url: 'https://www.bing.com/webmasters/about', icon: 'fab fa-microsoft' }
            ]
        },
        {
            id: 'templates',
            name: '网站模板',
            icon: 'fas fa-code',
            sites: [
                { name: 'Vercel Templates', url: 'https://vercel.com/templates', icon: 'fas fa-bolt' },
                { name: 'Rin Blog Template', url: 'https://github.com/openRin/Rin', icon: 'fab fa-github' },
                { name: 'Next.js Boilerplate', url: 'https://github.com/ixartz/Next-js-Boilerplate', icon: 'fab fa-react' },
                { name: 'SaaS Boilerplate', url: 'https://github.com/ixartz/SaaS-Boilerplate', icon: 'fas fa-rocket' },
                { name: 'NextJS Landing Page Template', url: 'https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template', icon: 'fas fa-home' },
                { name: 'Astro Boilerplate', url: 'https://github.com/ixartz/Astro-boilerplate', icon: 'fas fa-star' },
                { name: 'Landing Page Boilerplate', url: 'https://github.com/weijunext/landing-page-boilerplate', icon: 'fas fa-paper-plane' },
                { name: 'Viggle AI WebUI', url: 'https://github.com/ai-aigc-studio/Viggle-AI-WebUI', icon: 'fas fa-robot' },
                { name: 'Next.js Blog Template', url: 'https://github.com/weijunext/new-blog', icon: 'fas fa-blog' },
                { name: 'ProductHunt 截图工具', url: 'https://github.com/daimajia/huntscreens', icon: 'fas fa-camera' },
                { name: 'Smart Excel AI', url: 'https://github.com/weijunext/smart-excel-ai', icon: 'fas fa-table' },
                { name: 'NextJS VPS Example', url: 'https://github.com/ashleyrudland/nextjs_vps', icon: 'fas fa-server' },
                { name: 'AI Change Hairstyle', url: 'https://github.com/Pwntus/change-hairstyle-ai', icon: 'fas fa-cut' },
                { name: 'Green Screen Creator', url: 'https://github.com/replicate/green-screen-creator', icon: 'fas fa-video' },
                { name: 'Open SaaS', url: 'https://github.com/wasp-lang/open-saas/', icon: 'fas fa-box-open' },
                { name: 'JustShip SaaS', url: 'https://github.com/ocluf/justship', icon: 'fas fa-shipping-fast' },
                { name: '免费资源导航模板', url: 'https://github.com/fre123-com/fre123-nav/', icon: 'fas fa-compass' },
                { name: 'OSS Gallery', url: 'https://github.com/dubinc/oss-gallery', icon: 'fas fa-th-large' },
                { name: 'WebStack导航模板', url: 'https://github.com/WebStackPage/WebStackPage.github.io', icon: 'fas fa-layer-group' },
                { name: 'AI工具导航模板', url: 'https://github.com/6677-ai/tap4-ai-webui', icon: 'fas fa-sitemap' },
                { name: 'GPTs商店', url: 'https://github.com/all-in-aigc/gpts-works', icon: 'fas fa-store' },
                { name: 'UI Libs for Vue 3', url: 'https://github.com/ddahan/ui-libs', icon: 'fab fa-vuejs' },
                { name: 'DokeyAI', url: 'https://dokeyai.com/', icon: 'fas fa-gem' }
            ]
        },
        {
            id: 'news',
            name: '资讯网站',
            icon: 'fas fa-newspaper',
            sites: [
                { name: 'YouTube', url: 'https://www.youtube.com/', icon: 'fab fa-youtube' },
                { name: 'Facebook', url: 'https://www.facebook.com/', icon: 'fab fa-facebook' },
                { name: 'Twitter/X', url: 'https://x.com/', icon: 'fab fa-twitter' },
                { name: '谷歌搜索中心', url: 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content?hl=zh-cn', icon: 'fab fa-google' },
                { name: 'Reddit 子社区', url: 'https://liberating-doll-b8a.notion.site/Reddit-1a8e8aed91b18021839ecba8b74e530b', icon: 'fab fa-reddit' },
                { name: 'Ahrefs 热门网站排行', url: 'https://ahrefs.com/websites#trending', icon: 'fas fa-fire' },
                { name: 'AI 视频工具列表', url: 'https://docs.google.com/spreadsheets/d/1QOdqq9KbjQj1JZO43vc1pir2rnEEsMUXzTDATrOCn2k/edit', icon: 'fas fa-video' }
            ]
        },
        {
            id: 'finance',
            name: '生财',
            icon: 'fas fa-money-bill-wave',
            sites: [
                { name: '生财有术网页版', url: 'https://scys.com/', icon: 'fas fa-money-check-alt' },
                { name: 'Cursor-零基础做软件应用', url: 'https://scys.com/view/docx/YIvBdL38ConF89xdBvAckZBPn5e', icon: 'fas fa-code' },
                { name: '生财有术·RPA', url: 'https://scys.com/activity/landing/3046?tabIndex=0', icon: 'fas fa-robot' },
                { name: '生财有术·出海第一站', url: 'https://scys.com/activity/landing/3044?tabIndex=0', icon: 'fas fa-ship' },
                { name: '生财有术·comfyUI-liblib', url: 'https://scys.com/activity/landing?id=4669&tabIndex=0', icon: 'fas fa-paint-brush' },
                { name: '生财有术·AI编程', url: 'https://scys.com/activity/landing?id=3481&tabIndex=0', icon: 'fas fa-laptop-code' },
                { name: '生财有术·ai绘画', url: 'https://scys.com/activity/landing?id=3043&tabIndex=0', icon: 'fas fa-palette' },
                { name: '生财有术·Cursor编程', url: 'https://scys.com/activity/landing?id=4668&tabIndex=0', icon: 'fas fa-code' },
                { name: 'DeepSeek追热点', url: 'https://scys.com/articleDetail/xq_topic/2858151281144121', icon: 'fas fa-fire' },
                { name: 'DeepSeek快速生成图片', url: 'https://scys.com/articleDetail/xq_topic/5121828585248114', icon: 'fas fa-images' },
                { name: '5分钟做个网站', url: 'https://articles.zsxq.com/id_4dus5o2w72rc.html', icon: 'fas fa-globe' },
                { name: '生财有术·小绿书', url: 'https://scys.com/activity/landing?id=4659&tabIndex=0', icon: 'fas fa-book' },
                { name: '小红书商单变现', url: 'https://articles.zsxq.com/id_nkst3ovqzl5p.html', icon: 'fas fa-comment-dollar' }
            ]
        }
    ];

    const categoriesContainer = document.getElementById('categories-container');
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');

    // 渲染所有分类和网站
    function renderBookmarks(data) {
        categoriesContainer.innerHTML = '';
        
        data.forEach(category => {
            // 如果分类没有网站，则不显示
            if (category.sites.length === 0) return;
            
            const categoryElement = document.createElement('div');
            categoryElement.className = 'category';
            categoryElement.id = `category-${category.id}`;
            
            const categoryHeader = document.createElement('div');
            categoryHeader.className = 'category-header';
            categoryHeader.innerHTML = `<i class="${category.icon}"></i> ${category.name}`;
            
            const siteList = document.createElement('ul');
            siteList.className = 'site-list';
            
            category.sites.forEach(site => {
                const siteItem = document.createElement('li');
                siteItem.className = 'site-item';
                
                siteItem.innerHTML = `
                    <a href="${site.url}" class="site-link" target="_blank" rel="noopener noreferrer">
                        <div class="site-icon">
                            <i class="${site.icon || 'fas fa-link'}"></i>
                        </div>
                        <span class="site-title">${site.name}</span>
                    </a>
                `;
                
                siteList.appendChild(siteItem);
            });
            
            categoryElement.appendChild(categoryHeader);
            categoryElement.appendChild(siteList);
            categoriesContainer.appendChild(categoryElement);
        });
    }

    // 搜索功能
    function searchBookmarks(keyword) {
        if (!keyword.trim()) {
            renderBookmarks(bookmarksData);
            return;
        }
        
        keyword = keyword.toLowerCase();
        
        const filteredData = bookmarksData.map(category => {
            const filteredSites = category.sites.filter(site => 
                site.name.toLowerCase().includes(keyword) || 
                site.url.toLowerCase().includes(keyword)
            );
            
            return {
                ...category,
                sites: filteredSites
            };
        });
        
        renderBookmarks(filteredData);
    }

    // 绑定搜索事件
    searchBtn.addEventListener('click', () => {
        searchBookmarks(searchInput.value);
    });
    
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            searchBookmarks(searchInput.value);
        }
    });
    
    // 初始渲染
    renderBookmarks(bookmarksData);
}); 