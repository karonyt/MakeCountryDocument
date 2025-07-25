import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Download, 
  Github, 
  MessageCircle, 
  Youtube, 
  Twitter, 
  ExternalLink,
  Book,
  Bug,
  Heart,
  Globe
} from 'lucide-react';

const links = [
  {
    category: 'ダウンロード',
    items: [
      {
        name: 'MakeCountry v1.2.0 (最新版)',
        description: 'Minecraft BE 1.20.50+ 対応の最新版',
        url: '#',
        icon: Download,
        badge: '最新',
        badgeColor: 'bg-green-600'
      },
      {
        name: 'MakeCountry v1.1.5 (安定版)',
        description: 'より安定したバージョンをお求めの方に',
        url: '#',
        icon: Download,
        badge: '安定版',
        badgeColor: 'bg-blue-600'
      },
      {
        name: 'サンプルワールド',
        description: 'チュートリアル付きのサンプルワールド',
        url: '#',
        icon: Globe,
        badge: 'おすすめ',
        badgeColor: 'bg-amber-600'
      }
    ]
  },
  {
    category: '開発・サポート',
    items: [
      {
        name: 'GitHub リポジトリ',
        description: 'ソースコードの閲覧、Issue報告、プルリクエスト',
        url: '#',
        icon: Github,
        badge: 'オープンソース',
        badgeColor: 'bg-stone-600'
      },
      {
        name: 'バグ報告',
        description: 'バグや不具合を発見した場合はこちら',
        url: '#',
        icon: Bug,
        badge: '重要',
        badgeColor: 'bg-red-600'
      },
      {
        name: '機能要望',
        description: '新機能のリクエストや改善案の提案',
        url: '#',
        icon: Heart,
        badge: 'アイデア',
        badgeColor: 'bg-purple-600'
      }
    ]
  },
  {
    category: 'コミュニティ',
    items: [
      {
        name: 'Discord サーバー',
        description: 'リアルタイムでの質問、雑談、最新情報の共有',
        url: '#',
        icon: MessageCircle,
        badge: 'アクティブ',
        badgeColor: 'bg-indigo-600'
      },
      {
        name: 'YouTube チャンネル',
        description: 'チュートリアル動画、アップデート情報',
        url: '#',
        icon: Youtube,
        badge: 'チュートリアル',
        badgeColor: 'bg-red-500'
      },
      {
        name: 'Twitter',
        description: '開発進捗、リリース情報、お知らせ',
        url: '#',
        icon: Twitter,
        badge: '最新情報',
        badgeColor: 'bg-sky-500'
      }
    ]
  },
  {
    category: '関連リソース',
    items: [
      {
        name: 'Minecraft Wiki (BE)',
        description: 'Minecraft Bedrock Edition の公式情報',
        url: 'https://minecraft.wiki/w/Bedrock_Edition',
        icon: Book,
        badge: '公式',
        badgeColor: 'bg-emerald-600'
      },
      {
        name: 'Addon Development',
        description: 'アドオン開発に関する公式ドキュメント',
        url: 'https://docs.microsoft.com/en-us/minecraft/creator/',
        icon: Book,
        badge: '開発者向け',
        badgeColor: 'bg-orange-600'
      }
    ]
  }
];

export default function LinksPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-stone-900 mb-4">リンク集</h1>
        <p className="text-stone-600">
          MakeCountryアドオンに関連する重要なリンクをまとめました
        </p>
      </div>

      <div className="space-y-12">
        {links.map((section) => (
          <div key={section.category}>
            <h2 className="text-2xl font-bold text-stone-800 mb-6">
              {section.category}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.items.map((link) => {
                const Icon = link.icon;
                return (
                  <Card key={link.name} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <CardTitle className="flex items-center text-lg">
                          <Icon className="h-5 w-5 text-emerald-600 mr-2 flex-shrink-0" />
                          <span className="leading-tight">{link.name}</span>
                        </CardTitle>
                        <Badge className={`${link.badgeColor} text-white text-xs ml-2`}>
                          {link.badge}
                        </Badge>
                      </div>
                      <CardDescription className="text-sm leading-relaxed">
                        {link.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button 
                        asChild 
                        className="w-full bg-emerald-700 hover:bg-emerald-800"
                      >
                        <a 
                          href={link.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-center"
                        >
                          アクセス
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* お知らせセクション */}
      <Card className="mt-12 border-emerald-200 bg-emerald-50">
        <CardHeader>
          <CardTitle className="text-emerald-800">📢 重要なお知らせ</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-emerald-700">
            <p>
              <strong>v1.3.0 アップデート予定:</strong> 
              2024年2月に大型アップデートを予定しています。新しい外交機能と経済システムが追加されます。
            </p>
            <p>
              <strong>サーバー対応:</strong> 
              マルチプレイヤーサーバーでの動作改善を継続的に行っています。問題があればDiscordでお知らせください。
            </p>
            <p>
              <strong>コミュニティイベント:</strong> 
              月1回、Discord上で国家建設コンテストを開催しています。豪華賞品もご用意！
            </p>
          </div>
        </CardContent>
      </Card>

      {/* フッター情報 */}
      <div className="mt-12 text-center text-stone-500 text-sm">
        <p>
          MakeCountry アドオンは個人プロジェクトとして開発されています。<br />
          ご質問、ご要望は Discord または GitHub Issue でお気軽にどうぞ。
        </p>
        <p className="mt-2">
          © 2024 MakeCountry Development Team. All rights reserved.
        </p>
      </div>
    </div>
  );
}