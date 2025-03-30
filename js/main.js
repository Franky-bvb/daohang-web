document.addEventListener('DOMContentLoaded', () => {
    // 定义包含所有书签分类和网站的数据结构
    const bookmarksData = {
        "AI": [
            {
                name: "ChatGPT",
                url: "https://chat.openai.com/",
                icon: "fa-robot",
                description: "强大的AI聊天助手，由OpenAI开发，支持自然语言交互"
            },
            {
                name: "Claude",
                url: "https://claude.ai/",
                icon: "fa-comment-dots",
                description: "Anthropic开发的智能AI助手，擅长长文本处理和多轮对话"
            },
            {
                name: "Gemini",
                url: "https://gemini.google.com/",
                icon: "fa-brain",
                description: "Google研发的先进大语言模型，具有优秀的多模态能力"
            },
            {
                name: "文心一言",
                url: "https://yiyan.baidu.com/",
                icon: "fa-comment",
                description: "百度推出的对话式人工智能，擅长中文内容创作和回答"
            },
            {
                name: "通义千问",
                url: "https://qianwen.aliyun.com/",
                icon: "fa-lightbulb",
                description: "阿里云推出的AI大模型，具有丰富的知识和理解能力"
            },
            {
                name: "Midjourney",
                url: "https://www.midjourney.com/",
                icon: "fa-image",
                description: "顶级AI图像生成工具，可以通过文字描述创建高质量艺术作品"
            },
            {
                name: "DALL-E",
                url: "https://labs.openai.com/",
                icon: "fa-paint-brush",
                description: "OpenAI开发的AI图像生成模型，可将文本描述转换为创意图像"
            },
            {
                name: "Stable Diffusion",
                url: "https://stability.ai/",
                icon: "fa-palette",
                description: "开源的AI图像生成模型，可本地部署，支持文本到图像生成"
            }
        ],
        "设计与创作": [
            {
                name: "Canva",
                url: "https://www.canva.com/",
                icon: "fa-pencil-ruler",
                description: "流行的在线设计工具，提供模板和素材，易于使用的图形设计平台"
            },
            {
                name: "Figma",
                url: "https://www.figma.com/",
                icon: "fa-object-group",
                description: "专业的在线UI/UX设计工具，支持实时协作和原型制作"
            },
            {
                name: "墨刀",
                url: "https://modao.cc/",
                icon: "fa-crop",
                description: "国内领先的产品设计协作平台，支持原型、设计和交互测试"
            },
            {
                name: "创客贴",
                url: "https://www.chuangkit.com/",
                icon: "fa-tags",
                description: "简单易用的平面设计工具，提供海量模板和素材库"
            },
            {
                name: "稿定设计",
                url: "https://www.gaoding.com/",
                icon: "fa-pen-fancy",
                description: "专业的在线图片和视频编辑工具，拥有丰富的设计模板"
            }
        ],
        "网页游戏": [
            {
                name: "2048",
                url: "https://play2048.co/",
                icon: "fa-th",
                description: "经典数字合成游戏，通过滑动合并相同数字方块获得2048"
            },
            {
                name: "Wordle",
                url: "https://www.nytimes.com/games/wordle/",
                icon: "fa-font",
                description: "猜单词游戏，每天一个五字母单词，六次尝试机会"
            },
            {
                name: "Agar.io",
                url: "https://agar.io/",
                icon: "fa-circle",
                description: "多人在线吞噬游戏，控制小球吃掉其他玩家和食物不断变大"
            },
            {
                name: "Slither.io",
                url: "https://slither.io/",
                icon: "fa-sort-amount-up",
                description: "类似贪吃蛇的多人在线游戏，尝试让其他蛇撞到你身上"
            }
        ],
        "SEO工具": [
            {
                name: "Ahrefs",
                url: "https://ahrefs.com/",
                icon: "fa-search",
                description: "专业的SEO工具，提供关键词研究、竞争对手分析和反向链接审计"
            },
            {
                name: "SEMrush",
                url: "https://www.semrush.com/",
                icon: "fa-chart-line",
                description: "全套数字营销工具，可分析网站流量、研究关键词和追踪排名"
            },
            {
                name: "Moz",
                url: "https://moz.com/",
                icon: "fa-globe",
                description: "提供综合SEO研究和分析工具，包括站点审核和排名跟踪"
            }
        ],
        "域名服务": [
            {
                name: "GoDaddy",
                url: "https://www.godaddy.com/",
                icon: "fa-server",
                description: "全球最大的域名注册商之一，提供域名注册和网站托管服务"
            },
            {
                name: "Namecheap",
                url: "https://www.namecheap.com/",
                icon: "fa-tag",
                description: "价格实惠的域名注册和网站托管服务提供商，注重隐私保护"
            },
            {
                name: "万网",
                url: "https://wanwang.aliyun.com/",
                icon: "fa-globe-asia",
                description: "阿里云旗下的域名注册及管理服务，提供丰富的域名后缀选择"
            }
        ],
        "主机服务": [
            {
                name: "阿里云",
                url: "https://www.aliyun.com/",
                icon: "fa-cloud",
                description: "中国领先的云服务提供商，提供弹性计算、数据库和存储服务"
            },
            {
                name: "腾讯云",
                url: "https://cloud.tencent.com/",
                icon: "fa-cloud-upload-alt",
                description: "腾讯旗下云计算服务，提供全球部署和一站式解决方案"
            },
            {
                name: "AWS",
                url: "https://aws.amazon.com/",
                icon: "fa-server",
                description: "亚马逊云服务，全球最大的云计算平台之一，提供200多种云服务"
            },
            {
                name: "Vercel",
                url: "https://vercel.com/",
                icon: "fa-code",
                description: "专为前端开发优化的部署平台，支持React、Vue等框架的自动部署"
            }
        ],
        "数据分析": [
            {
                name: "Google Analytics",
                url: "https://analytics.google.com/",
                icon: "fa-chart-pie",
                description: "谷歌提供的网站流量分析工具，可跟踪和报告网站访问数据"
            },
            {
                name: "百度统计",
                url: "https://tongji.baidu.com/",
                icon: "fa-chart-area",
                description: "百度推出的免费网站流量分析工具，适合中国市场使用"
            },
            {
                name: "CNZZ",
                url: "https://www.umeng.com/",
                icon: "fa-chart-bar",
                description: "友盟+提供的网站统计服务，可分析用户行为和转化率"
            }
        ],
        "学习资源": [
            {
                name: "Coursera",
                url: "https://www.coursera.org/",
                icon: "fa-graduation-cap",
                description: "提供来自全球顶尖大学和机构的在线课程和学位项目"
            },
            {
                name: "edX",
                url: "https://www.edx.org/",
                icon: "fa-book",
                description: "哈佛和麻省理工创建的在线学习平台，提供大学水平的课程"
            },
            {
                name: "中国大学MOOC",
                url: "https://www.icourse163.org/",
                icon: "fa-university",
                description: "国内知名的大规模开放在线课程平台，提供中文优质教育资源"
            },
            {
                name: "W3School",
                url: "https://www.w3school.com.cn/",
                icon: "fa-code",
                description: "提供免费的网页技术教程，包括HTML、CSS、JavaScript等"
            },
            {
                name: "MDN Web Docs",
                url: "https://developer.mozilla.org/zh-CN/",
                icon: "fa-file-code",
                description: "Mozilla提供的网页技术文档，是Web开发的权威参考资源"
            }
        ]
    };

    const categoriesContainer = document.getElementById('categories-container');
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const navContainer = document.getElementById('nav-container');

    // 渲染导航栏
    function renderNav() {
        navContainer.innerHTML = '';
        
        // 添加"全部"导航项
        navContainer.innerHTML += `
            <div class="nav-item" data-category="all">
                <i class="fas fa-th-large"></i>全部
            </div>
        `;
        
        // 添加分类导航项
        for (const category in bookmarksData) {
            // 根据分类选择合适的图标
            let icon = 'fa-folder';
            switch(category) {
                case 'AI':
                    icon = 'fa-robot';
                    break;
                case '设计与创作':
                    icon = 'fa-pencil-ruler';
                    break;
                case '网页游戏':
                    icon = 'fa-gamepad';
                    break;
                case 'SEO工具':
                    icon = 'fa-search';
                    break;
                case '域名服务':
                    icon = 'fa-globe';
                    break;
                case '主机服务':
                    icon = 'fa-server';
                    break;
                case '数据分析':
                    icon = 'fa-chart-bar';
                    break;
                case '学习资源':
                    icon = 'fa-graduation-cap';
                    break;
            }
            
            navContainer.innerHTML += `
                <div class="nav-item" data-category="${category}">
                    <i class="fas ${icon}"></i>${category}
                </div>
            `;
        }
        
        // 为每个导航项添加点击事件
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            item.addEventListener('click', function() {
                const category = this.getAttribute('data-category');
                if (category === 'all') {
                    renderAllBookmarks();
                } else {
                    renderCategoryBookmarks(category);
                }
                setActiveNavItem(category);
            });
        });
    }

    // 设置活动导航项
    function setActiveNavItem(category) {
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            if (item.getAttribute('data-category') === category || 
                (category === 'all' && item.getAttribute('data-category') === 'all')) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }

    // 渲染特定分类的书签
    function renderCategoryBookmarks(category) {
        categoriesContainer.innerHTML = '';
        
        const bookmarks = bookmarksData[category];
        let bookmarksHTML = '';
        
        bookmarks.forEach(bookmark => {
            bookmarksHTML += createBookmarkCard(bookmark, category);
        });
        
        categoriesContainer.innerHTML = bookmarksHTML;
    }

    // 渲染所有书签
    function renderAllBookmarks() {
        categoriesContainer.innerHTML = '';
        
        let allBookmarksHTML = '';
        
        for (const category in bookmarksData) {
            bookmarksData[category].forEach(bookmark => {
                allBookmarksHTML += createBookmarkCard(bookmark, category);
            });
        }
        
        categoriesContainer.innerHTML = allBookmarksHTML;
    }

    // 创建书签卡片HTML
    function createBookmarkCard(bookmark, category) {
        return `
            <div class="site-card">
                <a href="${bookmark.url}" target="_blank" rel="noopener noreferrer">
                    <div class="site-card-category">${category}</div>
                    <div class="site-card-header">
                        <div class="site-card-icon">
                            <i class="fas ${bookmark.icon}"></i>
                        </div>
                        <h3 class="site-card-title">${bookmark.name}</h3>
                    </div>
                    <div class="site-card-description">${bookmark.description}</div>
                </a>
            </div>
        `;
    }

    // 搜索功能
    function searchBookmarks(keyword) {
        if (!keyword.trim()) {
            // 恢复默认显示
            const activeCategory = document.querySelector('.nav-item.active');
            if (activeCategory) {
                showCategoryBookmarks(activeCategory.dataset.category);
            } else if (document.querySelector('.nav-item')) {
                document.querySelector('.nav-item').classList.add('active');
                showCategoryBookmarks(Object.keys(bookmarksData)[0]);
            }
            return;
        }
        
        keyword = keyword.toLowerCase();
        categoriesContainer.innerHTML = '';
        
        // 搜索所有分类中的网站
        let matchedBookmarks = [];
        
        for (const category in bookmarksData) {
            const filteredSites = bookmarksData[category].filter(site => 
                site.name.toLowerCase().includes(keyword) || 
                site.description.toLowerCase().includes(keyword) ||
                site.url.toLowerCase().includes(keyword)
            );
            
            filteredSites.forEach(site => {
                matchedBookmarks.push({
                    bookmark: site,
                    category
                });
            });
        }
        
        // 渲染搜索结果
        let searchResultsHTML = '';
        
        if (matchedBookmarks.length > 0) {
            matchedBookmarks.forEach(match => {
                searchResultsHTML += createBookmarkCard(match.bookmark, match.category);
            });
        } else {
            searchResultsHTML = `
                <div class="no-results">
                    <p>没有找到与 "${keyword}" 相关的书签。</p>
                </div>
            `;
        }
        
        categoriesContainer.innerHTML = searchResultsHTML;
        
        // 取消导航栏的选中状态
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });
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
    
    // 初始化
    renderNav();
}); 