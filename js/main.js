// 当前语言（默认为英语）
let currentLanguage = 'en';

// 书签数据数组 - 使用双语结构
const bookmarksData = {
    "AI": [
        {
            name: {
                en: "ChatGPT",
                zh: "ChatGPT"
            },
            url: "https://chat.openai.com/",
            icon: "fa-robot",
            description: {
                en: "Powerful AI chat assistant developed by OpenAI, supporting natural language interaction",
                zh: "强大的AI聊天助手，由OpenAI开发，支持自然语言交互"
            }
        },
        {
            name: {
                en: "Claude",
                zh: "Claude"
            },
            url: "https://claude.ai/",
            icon: "fa-comment-dots",
            description: {
                en: "Intelligent AI assistant by Anthropic, excellent at handling long texts and multi-turn conversations",
                zh: "Anthropic开发的智能AI助手，擅长长文本处理和多轮对话"
            }
        },
        {
            name: {
                en: "Gemini",
                zh: "Gemini"
            },
            url: "https://gemini.google.com/",
            icon: "fa-brain",
            description: {
                en: "Advanced large language model developed by Google with excellent multimodal capabilities",
                zh: "Google研发的先进大语言模型，具有优秀的多模态能力"
            }
        },
        {
            name: {
                en: "Wenxin Yiyan",
                zh: "文心一言"
            },
            url: "https://yiyan.baidu.com/",
            icon: "fa-comment",
            description: {
                en: "Conversational AI launched by Baidu, specializing in Chinese content creation and Q&A",
                zh: "百度推出的对话式人工智能，擅长中文内容创作和回答"
            }
        },
        {
            name: {
                en: "Tongyi Qianwen",
                zh: "通义千问"
            },
            url: "https://qianwen.aliyun.com/",
            icon: "fa-lightbulb",
            description: {
                en: "AI model by Alibaba Cloud with rich knowledge and comprehension capabilities",
                zh: "阿里云推出的AI大模型，具有丰富的知识和理解能力"
            }
        },
        {
            name: {
                en: "Midjourney",
                zh: "Midjourney"
            },
            url: "https://www.midjourney.com/",
            icon: "fa-image",
            description: {
                en: "Top-tier AI image generation tool that creates high-quality artwork from text descriptions",
                zh: "顶级AI图像生成工具，可以通过文字描述创建高质量艺术作品"
            }
        },
        {
            name: {
                en: "DALL-E",
                zh: "DALL-E"
            },
            url: "https://labs.openai.com/",
            icon: "fa-paint-brush",
            description: {
                en: "AI image generation model by OpenAI that converts text descriptions into creative images",
                zh: "OpenAI开发的AI图像生成模型，可将文本描述转换为创意图像"
            }
        },
        {
            name: {
                en: "Stable Diffusion",
                zh: "Stable Diffusion"
            },
            url: "https://stability.ai/",
            icon: "fa-palette",
            description: {
                en: "Open-source AI image generation model that can be deployed locally, supporting text-to-image generation",
                zh: "开源的AI图像生成模型，可本地部署，支持文本到图像生成"
            }
        }
    ],
    "Design": [
        {
            name: {
                en: "Canva",
                zh: "Canva"
            },
            url: "https://www.canva.com/",
            icon: "fa-pencil-ruler",
            description: {
                en: "Popular online design tool with templates and resources for easy graphic design",
                zh: "流行的在线设计工具，提供模板和素材，易于使用的图形设计平台"
            }
        },
        {
            name: {
                en: "Figma",
                zh: "Figma"
            },
            url: "https://www.figma.com/",
            icon: "fa-object-group",
            description: {
                en: "Professional online UI/UX design tool supporting real-time collaboration and prototyping",
                zh: "专业的在线UI/UX设计工具，支持实时协作和原型制作"
            }
        },
        {
            name: {
                en: "Modao",
                zh: "墨刀"
            },
            url: "https://modao.cc/",
            icon: "fa-crop",
            description: {
                en: "Leading product design collaboration platform in China, supporting prototyping, design and interaction testing",
                zh: "国内领先的产品设计协作平台，支持原型、设计和交互测试"
            }
        },
        {
            name: {
                en: "Chuangkit",
                zh: "创客贴"
            },
            url: "https://www.chuangkit.com/",
            icon: "fa-tags",
            description: {
                en: "Easy-to-use graphic design tool with a vast library of templates and resources",
                zh: "简单易用的平面设计工具，提供海量模板和素材库"
            }
        },
        {
            name: {
                en: "Gaoding Design",
                zh: "稿定设计"
            },
            url: "https://www.gaoding.com/",
            icon: "fa-pen-fancy",
            description: {
                en: "Professional online image and video editing tool with rich design templates",
                zh: "专业的在线图片和视频编辑工具，拥有丰富的设计模板"
            }
        }
    ],
    "Web Games": [
        {
            name: {
                en: "2048",
                zh: "2048"
            },
            url: "https://play2048.co/",
            icon: "fa-th",
            description: {
                en: "Classic number merging game, combine identical number blocks to reach 2048",
                zh: "经典数字合成游戏，通过滑动合并相同数字方块获得2048"
            }
        },
        {
            name: {
                en: "Wordle",
                zh: "Wordle"
            },
            url: "https://www.nytimes.com/games/wordle/",
            icon: "fa-font",
            description: {
                en: "Word guessing game with one five-letter word daily and six attempts",
                zh: "猜单词游戏，每天一个五字母单词，六次尝试机会"
            }
        },
        {
            name: {
                en: "Agar.io",
                zh: "Agar.io"
            },
            url: "https://agar.io/",
            icon: "fa-circle",
            description: {
                en: "Multiplayer online game where you control a cell to eat other players and food to grow larger",
                zh: "多人在线吞噬游戏，控制小球吃掉其他玩家和食物不断变大"
            }
        },
        {
            name: {
                en: "Slither.io",
                zh: "Slither.io"
            },
            url: "https://slither.io/",
            icon: "fa-sort-amount-up",
            description: {
                en: "Snake-like multiplayer online game where you try to make other snakes run into you",
                zh: "类似贪吃蛇的多人在线游戏，尝试让其他蛇撞到你身上"
            }
        }
    ],
    "SEO Tools": [
        {
            name: {
                en: "Ahrefs",
                zh: "Ahrefs"
            },
            url: "https://ahrefs.com/",
            icon: "fa-search",
            description: {
                en: "Professional SEO tool providing keyword research, competitor analysis, and backlink auditing",
                zh: "专业的SEO工具，提供关键词研究、竞争对手分析和反向链接审计"
            }
        },
        {
            name: {
                en: "SEMrush",
                zh: "SEMrush"
            },
            url: "https://www.semrush.com/",
            icon: "fa-chart-line",
            description: {
                en: "Comprehensive digital marketing toolkit for analyzing website traffic, researching keywords, and tracking rankings",
                zh: "全套数字营销工具，可分析网站流量、研究关键词和追踪排名"
            }
        },
        {
            name: {
                en: "Moz",
                zh: "Moz"
            },
            url: "https://moz.com/",
            icon: "fa-globe",
            description: {
                en: "Provides comprehensive SEO research and analysis tools, including site audits and rank tracking",
                zh: "提供综合SEO研究和分析工具，包括站点审核和排名跟踪"
            }
        }
    ],
    "Domain Services": [
        {
            name: {
                en: "GoDaddy",
                zh: "GoDaddy"
            },
            url: "https://www.godaddy.com/",
            icon: "fa-server",
            description: {
                en: "One of the world's largest domain registrars, offering domain registration and website hosting services",
                zh: "全球最大的域名注册商之一，提供域名注册和网站托管服务"
            }
        },
        {
            name: {
                en: "Namecheap",
                zh: "Namecheap"
            },
            url: "https://www.namecheap.com/",
            icon: "fa-tag",
            description: {
                en: "Affordable domain registration and website hosting service provider with a focus on privacy protection",
                zh: "价格实惠的域名注册和网站托管服务提供商，注重隐私保护"
            }
        },
        {
            name: {
                en: "Alibaba Cloud",
                zh: "万网"
            },
            url: "https://wanwang.aliyun.com/",
            icon: "fa-globe-asia",
            description: {
                en: "Domain registration and management service under Alibaba Cloud, offering rich domain suffix options",
                zh: "阿里云旗下的域名注册及管理服务，提供丰富的域名后缀选择"
            }
        }
    ],
    "Web Hosting": [
        {
            name: {
                en: "Alibaba Cloud",
                zh: "阿里云"
            },
            url: "https://www.aliyun.com/",
            icon: "fa-cloud",
            description: {
                en: "Leading cloud service provider in China, offering elastic computing, database, and storage services",
                zh: "中国领先的云服务提供商，提供弹性计算、数据库和存储服务"
            }
        },
        {
            name: {
                en: "Tencent Cloud",
                zh: "腾讯云"
            },
            url: "https://cloud.tencent.com/",
            icon: "fa-cloud-upload-alt",
            description: {
                en: "Tencent's cloud computing service with global deployment and one-stop solutions",
                zh: "腾讯旗下云计算服务，提供全球部署和一站式解决方案"
            }
        },
        {
            name: {
                en: "AWS",
                zh: "AWS"
            },
            url: "https://aws.amazon.com/",
            icon: "fa-server",
            description: {
                en: "Amazon Web Services, one of the world's largest cloud computing platforms, offering over 200 cloud services",
                zh: "亚马逊云服务，全球最大的云计算平台之一，提供200多种云服务"
            }
        },
        {
            name: {
                en: "Vercel",
                zh: "Vercel"
            },
            url: "https://vercel.com/",
            icon: "fa-code",
            description: {
                en: "Deployment platform optimized for frontend development, supporting automatic deployment of React, Vue and other frameworks",
                zh: "专为前端开发优化的部署平台，支持React、Vue等框架的自动部署"
            }
        }
    ],
    "Analytics": [
        {
            name: {
                en: "Google Analytics",
                zh: "Google Analytics"
            },
            url: "https://analytics.google.com/",
            icon: "fa-chart-pie",
            description: {
                en: "Website traffic analysis tool by Google for tracking and reporting website visits",
                zh: "谷歌提供的网站流量分析工具，可跟踪和报告网站访问数据"
            }
        },
        {
            name: {
                en: "Baidu Analytics",
                zh: "百度统计"
            },
            url: "https://tongji.baidu.com/",
            icon: "fa-chart-area",
            description: {
                en: "Free website traffic analysis tool by Baidu, suitable for the Chinese market",
                zh: "百度推出的免费网站流量分析工具，适合中国市场使用"
            }
        },
        {
            name: {
                en: "CNZZ",
                zh: "CNZZ"
            },
            url: "https://www.umeng.com/",
            icon: "fa-chart-bar",
            description: {
                en: "Website statistics service by Umeng+, for analyzing user behavior and conversion rates",
                zh: "友盟+提供的网站统计服务，可分析用户行为和转化率"
            }
        }
    ],
    "Learning": [
        {
            name: {
                en: "Coursera",
                zh: "Coursera"
            },
            url: "https://www.coursera.org/",
            icon: "fa-graduation-cap",
            description: {
                en: "Offers online courses and degree programs from top universities and institutions worldwide",
                zh: "提供来自全球顶尖大学和机构的在线课程和学位项目"
            }
        },
        {
            name: {
                en: "edX",
                zh: "edX"
            },
            url: "https://www.edx.org/",
            icon: "fa-book",
            description: {
                en: "Online learning platform created by Harvard and MIT, offering university-level courses",
                zh: "哈佛和麻省理工创建的在线学习平台，提供大学水平的课程"
            }
        },
        {
            name: {
                en: "China University MOOC",
                zh: "中国大学MOOC"
            },
            url: "https://www.icourse163.org/",
            icon: "fa-university",
            description: {
                en: "Well-known Massive Open Online Course platform in China, providing quality Chinese educational resources",
                zh: "国内知名的大规模开放在线课程平台，提供中文优质教育资源"
            }
        },
        {
            name: {
                en: "W3School",
                zh: "W3School"
            },
            url: "https://www.w3school.com.cn/",
            icon: "fa-code",
            description: {
                en: "Provides free web technology tutorials, including HTML, CSS, JavaScript, etc.",
                zh: "提供免费的网页技术教程，包括HTML、CSS、JavaScript等"
            }
        },
        {
            name: {
                en: "MDN Web Docs",
                zh: "MDN Web Docs"
            },
            url: "https://developer.mozilla.org/zh-CN/",
            icon: "fa-file-code",
            description: {
                en: "Web technology documentation by Mozilla, an authoritative reference for web development",
                zh: "Mozilla提供的网页技术文档，是Web开发的权威参考资源"
            }
        }
    ]
};

// 翻译字典
const translations = {
    "siteTitle": {
        en: "Webtoolslab",
        zh: "网站工具实验室"
    },
    "searchPlaceholder": {
        en: "Search bookmarks...",
        zh: "搜索网站..."
    },
    "all": {
        en: "All",
        zh: "全部"
    },
    "categories": {
        en: "Categories",
        zh: "分类目录"
    },
    "allBookmarks": {
        en: "All Bookmarks",
        zh: "所有书签"
    },
    "categoryBookmarks": {
        en: "Bookmarks in",
        zh: "分类书签："
    },
    "noResults": {
        en: "No bookmarks found related to ",
        zh: "没有找到与 "
    },
    "noResultsEnd": {
        en: "",
        zh: " 相关的书签。"
    },
    "language": {
        en: "Language:",
        zh: "语言选择:"
    },
    "copyright": {
        en: "Webtoolslab | Last updated on March 30, 2025",
        zh: "网站工具实验室 | 最后更新于 2025年3月30日"
    },
    "categoryNames": {
        "AI": {
            en: "AI",
            zh: "AI"
        },
        "Design": {
            en: "Design",
            zh: "设计与创作"
        },
        "Web Games": {
            en: "Web Games",
            zh: "网页游戏"
        },
        "SEO Tools": {
            en: "SEO Tools",
            zh: "SEO工具"
        },
        "Domain Services": {
            en: "Domain Services",
            zh: "域名服务"
        },
        "Web Hosting": {
            en: "Web Hosting",
            zh: "主机服务"
        },
        "Analytics": {
            en: "Analytics",
            zh: "数据分析"
        },
        "Learning": {
            en: "Learning",
            zh: "学习资源"
        }
    }
};

// 获取DOM元素
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const navContainer = document.getElementById('nav-container');
const categoriesContainer = document.getElementById('categories-container');
const languageToggle = document.getElementById('language-toggle');
const siteTitle = document.getElementById('site-title');
const copyright = document.getElementById('copyright');
const langLabel = document.querySelector('.lang-label');
const sidebarTitle = document.querySelector('.sidebar-title');
const contentTitle = document.querySelector('.content-title');

// 从本地存储加载语言设置
function loadLanguagePreference() {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage) {
        currentLanguage = savedLanguage;
    }
    updateLanguageDisplay();
}

// 保存语言偏好到本地存储
function saveLanguagePreference(language) {
    localStorage.setItem('preferredLanguage', language);
}

// 切换语言
function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'zh' : 'en';
    saveLanguagePreference(currentLanguage);
    updateLanguageDisplay();
}

// 更新页面上的语言显示
function updateLanguageDisplay() {
    // 更新标题和占位符文本
    document.title = translations.siteTitle[currentLanguage] + " - " + translations.allBookmarks[currentLanguage];
    siteTitle.textContent = translations.siteTitle[currentLanguage];
    searchInput.placeholder = translations.searchPlaceholder[currentLanguage];
    copyright.textContent = translations.copyright[currentLanguage];
    langLabel.textContent = translations.language[currentLanguage];
    sidebarTitle.textContent = translations.categories[currentLanguage];
    
    // 更新导航标题
    updateContentTitle();
    
    // 更新语言切换按钮文本
    languageToggle.textContent = currentLanguage === 'en' ? '中文' : 'English';
    
    // 重新渲染导航和当前显示的书签
    renderNavigation();
    const activeNavItem = document.querySelector('.nav-item.active');
    if (activeNavItem) {
        const category = activeNavItem.getAttribute('data-category');
        if (category === 'all') {
            renderAllBookmarks();
        } else {
            renderCategoryBookmarks(category);
        }
    } else {
        renderAllBookmarks();
    }
}

// 更新内容标题
function updateContentTitle(category) {
    if (!category || category === 'all') {
        contentTitle.textContent = translations.allBookmarks[currentLanguage];
    } else {
        contentTitle.textContent = `${translations.categoryBookmarks[currentLanguage]} ${translations.categoryNames[category][currentLanguage]}`;
    }
}

// 初始化函数
function init() {
    // 加载语言偏好
    loadLanguagePreference();
    
    // 渲染导航栏
    renderNavigation();
    
    // 默认显示所有书签
    renderAllBookmarks();
    setActiveNavItem('all');
    
    // 添加搜索功能
    searchBtn.addEventListener('click', handleSearch);
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });
    
    // 添加语言切换功能
    languageToggle.addEventListener('click', toggleLanguage);
}

// 渲染导航栏
function renderNavigation() {
    let navHTML = '';
    
    // 添加"全部"导航项
    navHTML += `
        <div class="nav-item" data-category="all">
            <i class="fas fa-th-large"></i>${translations.all[currentLanguage]}
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
            case 'Design':
                icon = 'fa-pencil-ruler';
                break;
            case 'Web Games':
                icon = 'fa-gamepad';
                break;
            case 'SEO Tools':
                icon = 'fa-search';
                break;
            case 'Domain Services':
                icon = 'fa-globe';
                break;
            case 'Web Hosting':
                icon = 'fa-server';
                break;
            case 'Analytics':
                icon = 'fa-chart-bar';
                break;
            case 'Learning':
                icon = 'fa-graduation-cap';
                break;
        }
        
        // 获取翻译后的类目名称
        const translatedCategory = translations.categoryNames[category][currentLanguage];
        
        navHTML += `
            <div class="nav-item" data-category="${category}">
                <i class="fas ${icon}"></i>${translatedCategory}
            </div>
        `;
    }
    
    navContainer.innerHTML = navHTML;
    
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
            updateContentTitle(category);
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
    const bookmarks = bookmarksData[category];
    let bookmarksHTML = '';
    
    bookmarks.forEach(bookmark => {
        bookmarksHTML += createBookmarkCard(bookmark, category);
    });
    
    categoriesContainer.innerHTML = bookmarksHTML;
}

// 渲染所有书签
function renderAllBookmarks() {
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
    // 使用当前语言获取翻译后的内容
    const bookmarkName = bookmark.name[currentLanguage];
    const bookmarkDescription = bookmark.description[currentLanguage];
    const categoryName = translations.categoryNames[category][currentLanguage];
    
    return `
        <div class="site-card">
            <a href="${bookmark.url}" target="_blank" rel="noopener noreferrer">
                <div class="site-card-category">${categoryName}</div>
                <div class="site-card-header">
                    <div class="site-card-icon">
                        <i class="fas ${bookmark.icon}"></i>
                    </div>
                    <h3 class="site-card-title">${bookmarkName}</h3>
                </div>
                <div class="site-card-description">${bookmarkDescription}</div>
            </a>
        </div>
    `;
}

// 处理搜索功能
function handleSearch() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    
    if (searchTerm === '') {
        // 如果搜索框为空，显示当前活动的分类
        const activeNavItem = document.querySelector('.nav-item.active');
        const category = activeNavItem.getAttribute('data-category');
        
        if (category === 'all') {
            renderAllBookmarks();
        } else {
            renderCategoryBookmarks(category);
        }
        return;
    }
    
    let matchedBookmarks = [];
    
    // 在所有书签中搜索
    for (const category in bookmarksData) {
        const bookmarksInCategory = bookmarksData[category];
        
        const matchedInCategory = bookmarksInCategory.filter(bookmark => 
            bookmark.name[currentLanguage].toLowerCase().includes(searchTerm) || 
            bookmark.description[currentLanguage].toLowerCase().includes(searchTerm) ||
            translations.categoryNames[category][currentLanguage].toLowerCase().includes(searchTerm)
        );
        
        matchedInCategory.forEach(bookmark => {
            matchedBookmarks.push({
                bookmark,
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
                <p>${translations.noResults[currentLanguage]}"${searchTerm}"${translations.noResultsEnd[currentLanguage]}</p>
            </div>
        `;
    }
    
    contentTitle.textContent = `Search: "${searchTerm}"`;
    categoriesContainer.innerHTML = searchResultsHTML;
}

// 初始化应用
document.addEventListener('DOMContentLoaded', init); 