// worker.js
// 

let robotstxt = `# pilotsnpaws.org robots.txt file

User-agent: *
Disallow: /stats/
Disallow: /maps_more/
Disallow: /references/
Disallow: /wp-includes/
Disallow: /forum/memberlist.php
Disallow: /forum/utils/
Disallow: /notif/
Crawl-delay: 3

User-Agent: MJ12bot
Crawl-Delay: 15
Disallow: /forum/

User-agent: Amazonbot               # Amazon's user agent
Crawl-Delay: 15
Disallow: /forum/            # disallow this directory


User-Agent: *
Disallow: /admin
Disallow: /api/*

User-agent: SemrushBot-SA
Disallow: /
User-agent: SemrushBot
Disallow: /


User-agent: sogou spider
Disallow: /

User-agent: TurnitinBot
Disallow: /

User-agent: Yandex
Disallow: /

User-agent: BLEXBot
Disallow: /

User-agent: Domain Re-Animator Bot
Disallow: /

# http://openlinkprofiler.org/bot
User-agent: spbot
Disallow: /

# http://www.crazywebcrawler.com/
User-agent: CrazyWebCrawler-Spider
Disallow: /

# http://pipes.yahoo.com/pipes/
User-agent: Yahoo Pipes 1.0
Disallow: /

# http://www.sogou.com/docs/help/webmasters.htm
User-agent: Sogou web spider
Disallow: /

# https://cliqz.com/en/cliqzbot
User-agent: Cliqzbot
Disallow: /

# http://www.gigablast.com/
User-agent: Gigabot
Disallow: /

# 2024 AI bots and others
User-agent: GPTBot
Disallow: /
User-agent: ChatGPT-User
Disallow: /
User-agent: PerplexityBot
Disallow: /
User-agent: Amazonbot
Disallow: /
User-agent: ClaudeBot
Disallow: /
User-agent: Omgilibot
Disallow: /
User-Agent: FacebookBot
Disallow: /
User-Agent: Applebot
Disallow: /
User-agent: anthropic-ai
Disallow: /
User-agent: Bytespider
Disallow: /
User-agent: Claude-Web
Disallow: /
User-agent: Diffbot
Disallow: /
User-agent: ImagesiftBot
Disallow: /
User-agent: Omgilibot
Disallow: /
User-agent: Omgili
Disallow: /
User-agent: YouBot
Disallow: /

# Sitemap: TBD


# this robots.txt brought to you by a cloudflare worker`

export default {
  async fetch(request, env, ctx) {
    return new Response(robotstxt,
      {
        status: 200,
        headers: {
         // 'strict-transport-security': "max-age=30",
          'expect-ct': "max-age=30, enforce"
        }
      }      
      );
  },
};